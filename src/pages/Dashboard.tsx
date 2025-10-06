import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Flame, FootprintsIcon, TrendingUp, Calendar, Award, Target, Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface WorkoutLog {
  id: string;
  date: string;
  exercises: string;
  duration: number;
  calories: number;
  steps?: number;
}

const Dashboard = () => {
  const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    exercises: "",
    duration: "",
    calories: "",
    steps: "",
  });

  // Load workout logs from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("workoutLogs");
    if (stored) {
      setWorkoutLogs(JSON.parse(stored));
    }
  }, []);

  // Save workout logs to localStorage whenever they change
  useEffect(() => {
    if (workoutLogs.length > 0) {
      localStorage.setItem("workoutLogs", JSON.stringify(workoutLogs));
    }
  }, [workoutLogs]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newLog: WorkoutLog = {
      id: Date.now().toString(),
      date: formData.date,
      exercises: formData.exercises,
      duration: parseInt(formData.duration),
      calories: parseInt(formData.calories),
      steps: formData.steps ? parseInt(formData.steps) : undefined,
    };

    setWorkoutLogs([newLog, ...workoutLogs]);
    setIsDialogOpen(false);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      exercises: "",
      duration: "",
      calories: "",
      steps: "",
    });
    toast.success("Workout logged successfully!");
  };

  // Calculate statistics from actual workout logs
  const calculateStats = () => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const thisWeekLogs = workoutLogs.filter(log => new Date(log.date) >= oneWeekAgo);
    const thisMonthLogs = workoutLogs.filter(log => new Date(log.date) >= oneMonthAgo);
    const lastWeekLogs = workoutLogs.filter(log => {
      const logDate = new Date(log.date);
      return logDate < oneWeekAgo && logDate >= new Date(oneWeekAgo.getTime() - 7 * 24 * 60 * 60 * 1000);
    });

    const totalWorkouts = workoutLogs.length;
    const totalCalories = thisMonthLogs.reduce((sum, log) => sum + log.calories, 0);
    const totalSteps = thisMonthLogs.reduce((sum, log) => sum + (log.steps || 0), 0);
    const avgDuration = thisWeekLogs.length > 0 
      ? Math.round(thisWeekLogs.reduce((sum, log) => sum + log.duration, 0) / thisWeekLogs.length)
      : 0;

    const workoutChange = lastWeekLogs.length > 0 
      ? Math.round(((thisWeekLogs.length - lastWeekLogs.length) / lastWeekLogs.length) * 100)
      : 0;

    return {
      totalWorkouts,
      totalCalories,
      totalSteps,
      avgDuration,
      workoutChange,
      thisWeekCount: thisWeekLogs.length,
      thisMonthCount: thisMonthLogs.length,
    };
  };

  // Calculate streak
  const calculateStreak = () => {
    if (workoutLogs.length === 0) return { current: 0, longest: 0 };

    const sortedLogs = [...workoutLogs].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const uniqueDates = [...new Set(sortedLogs.map(log => log.date))];
    
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Calculate current streak
    for (let i = 0; i < uniqueDates.length; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(checkDate.getDate() - i);
      const checkDateStr = checkDate.toISOString().split('T')[0];
      
      if (uniqueDates.includes(checkDateStr)) {
        currentStreak++;
      } else {
        break;
      }
    }

    // Calculate longest streak
    for (let i = 0; i < uniqueDates.length; i++) {
      if (i === 0) {
        tempStreak = 1;
      } else {
        const prevDate = new Date(uniqueDates[i - 1]);
        const currDate = new Date(uniqueDates[i]);
        const diffDays = Math.round((prevDate.getTime() - currDate.getTime()) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          tempStreak++;
        } else {
          longestStreak = Math.max(longestStreak, tempStreak);
          tempStreak = 1;
        }
      }
    }
    longestStreak = Math.max(longestStreak, tempStreak);

    return { current: currentStreak, longest: longestStreak };
  };

  const stats = calculateStats();
  const streaks = calculateStreak();

  const statsDisplay = [
    { 
      title: "Total Workouts", 
      value: stats.totalWorkouts.toString(), 
      icon: Activity, 
      change: stats.workoutChange !== 0 ? `${stats.workoutChange > 0 ? '+' : ''}${stats.workoutChange}%` : "N/A", 
      color: "text-purple-400" 
    },
    { 
      title: "Calories Burned", 
      value: stats.totalCalories.toLocaleString(), 
      icon: Flame, 
      change: "This month", 
      color: "text-orange-400" 
    },
    { 
      title: "Steps This Week", 
      value: stats.totalSteps.toLocaleString(), 
      icon: FootprintsIcon, 
      change: "This month", 
      color: "text-green-400" 
    },
    { 
      title: "Avg. Workout Duration", 
      value: `${stats.avgDuration} min`, 
      icon: TrendingUp, 
      change: "This week", 
      color: "text-blue-400" 
    },
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
    
    const daysAgo = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (daysAgo < 7) return `${daysAgo} days ago`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Track your fitness progress and achievements</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Log Workout
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Log Your Workout</DialogTitle>
                <DialogDescription>
                  Add details about your workout session
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="exercises">Exercises</Label>
                  <Textarea
                    id="exercises"
                    placeholder="e.g., Bench Press, Squats, Pull-ups"
                    value={formData.exercises}
                    onChange={(e) => setFormData({ ...formData, exercises: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input
                      id="duration"
                      type="number"
                      placeholder="45"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="calories">Calories Burned</Label>
                    <Input
                      id="calories"
                      type="number"
                      placeholder="320"
                      value={formData.calories}
                      onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="steps">Steps (optional)</Label>
                  <Input
                    id="steps"
                    type="number"
                    placeholder="8000"
                    value={formData.steps}
                    onChange={(e) => setFormData({ ...formData, steps: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full">Save Workout</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsDisplay.map((stat) => (
            <Card key={stat.title} className="bg-card border-border hover:border-primary/50 transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Streaks Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
              <Flame className="w-5 h-5 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{streaks.current} days</div>
              <p className="text-xs text-muted-foreground mt-1">{streaks.current > 0 ? "Keep it going!" : "Start your streak!"}</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Longest Streak</CardTitle>
              <Award className="w-5 h-5 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{streaks.longest} days</div>
              <p className="text-xs text-muted-foreground mt-1">{streaks.longest > 0 ? "Personal record" : "No streak yet"}</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
              <Calendar className="w-5 h-5 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.thisMonthCount}</div>
              <p className="text-xs text-muted-foreground mt-1">Total workouts</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Workouts */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Recent Workouts</CardTitle>
            <CardDescription>Your latest fitness activities</CardDescription>
          </CardHeader>
          <CardContent>
            {workoutLogs.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Activity className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No workouts logged yet.</p>
                <p className="text-sm mt-1">Click "Log Workout" to add your first entry!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {workoutLogs.slice(0, 5).map((workout) => (
                  <div
                    key={workout.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{formatDate(workout.date)}</p>
                      <p className="text-sm text-muted-foreground mt-1">{workout.exercises}</p>
                    </div>
                    <div className="flex gap-6 text-right">
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm font-medium text-primary">{workout.duration} min</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Calories</p>
                        <p className="text-sm font-medium text-orange-400">{workout.calories}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Goals Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Weekly Goal</CardTitle>
                <CardDescription>5 workouts per week</CardDescription>
              </div>
              <Target className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-primary font-semibold">{stats.thisWeekCount}/5 completed</span>
                </div>
                <Progress value={(stats.thisWeekCount / 5) * 100} className="h-3" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Monthly Challenge</CardTitle>
                <CardDescription>20 workouts this month</CardDescription>
              </div>
              <Calendar className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-primary font-semibold">{stats.thisMonthCount}/20 completed</span>
                </div>
                <Progress value={(stats.thisMonthCount / 20) * 100} className="h-3" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

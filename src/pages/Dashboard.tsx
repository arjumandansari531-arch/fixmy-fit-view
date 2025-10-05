import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Flame, FootprintsIcon, TrendingUp, Calendar, Award, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  // Mock data - in a real app, this would come from a backend/state management
  const stats = [
    { title: "Total Workouts", value: "24", icon: Activity, change: "+12%", color: "text-purple-400" },
    { title: "Calories Burned", value: "12,450", icon: Flame, change: "+8%", color: "text-orange-400" },
    { title: "Steps This Week", value: "45,230", icon: FootprintsIcon, change: "+15%", color: "text-green-400" },
    { title: "Avg. Daily Activity", value: "78 min", icon: TrendingUp, change: "+5%", color: "text-blue-400" },
  ];

  const recentWorkouts = [
    { date: "Today", exercises: "Shoulder Press, Lateral Raises, Front Raises", duration: "45 min", calories: 320 },
    { date: "Yesterday", exercises: "Pull-ups, Bent-Over Rows, Lat Pulldowns", duration: "50 min", calories: 380 },
    { date: "2 days ago", exercises: "Plank, Crunches, Bicycle Crunches", duration: "30 min", calories: 210 },
    { date: "3 days ago", exercises: "Squats, Lunges, Leg Press", duration: "55 min", calories: 420 },
    { date: "4 days ago", exercises: "Bench Press, Push-ups, Chest Flyes", duration: "40 min", calories: 340 },
  ];

  // Streak data
  const currentStreak = 7;
  const longestStreak = 15;
  const workoutsThisWeek = 5;
  const workoutsThisMonth = 18;

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Track your fitness progress and achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-card border-border hover:border-primary/50 transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-400 mt-1">{stat.change} from last week</p>
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
              <div className="text-3xl font-bold">{currentStreak} days</div>
              <p className="text-xs text-muted-foreground mt-1">Keep it going!</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Longest Streak</CardTitle>
              <Award className="w-5 h-5 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{longestStreak} days</div>
              <p className="text-xs text-muted-foreground mt-1">Personal record</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
              <Calendar className="w-5 h-5 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{workoutsThisMonth}</div>
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
            <div className="space-y-3">
              {recentWorkouts.map((workout, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{workout.date}</p>
                    <p className="text-sm text-muted-foreground mt-1">{workout.exercises}</p>
                  </div>
                  <div className="flex gap-6 text-right">
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-medium text-primary">{workout.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Calories</p>
                      <p className="text-sm font-medium text-orange-400">{workout.calories}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                  <span className="text-primary font-semibold">{workoutsThisWeek}/5 completed</span>
                </div>
                <Progress value={(workoutsThisWeek / 5) * 100} className="h-3" />
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
                  <span className="text-primary font-semibold">{workoutsThisMonth}/20 completed</span>
                </div>
                <Progress value={(workoutsThisMonth / 20) * 100} className="h-3" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

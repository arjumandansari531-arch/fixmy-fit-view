import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Flame, FootprintsIcon, TrendingUp } from "lucide-react";

const Dashboard = () => {
  // Mock data - in a real app, this would come from a backend/state management
  const stats = [
    { title: "Total Workouts", value: "24", icon: Activity, change: "+12%", color: "text-purple-400" },
    { title: "Calories Burned", value: "12,450", icon: Flame, change: "+8%", color: "text-orange-400" },
    { title: "Steps This Week", value: "45,230", icon: FootprintsIcon, change: "+15%", color: "text-green-400" },
    { title: "Avg. Daily Activity", value: "78 min", icon: TrendingUp, change: "+5%", color: "text-blue-400" },
  ];

  const recentWorkouts = [
    { date: "Today", exercises: "Shoulder Press, Lateral Raises, Front Raises", duration: "45 min" },
    { date: "Yesterday", exercises: "Pull-ups, Bent-Over Rows, Lat Pulldowns", duration: "50 min" },
    { date: "2 days ago", exercises: "Plank, Crunches, Bicycle Crunches", duration: "30 min" },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Track your fitness progress and achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* Recent Workouts */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Recent Workouts</CardTitle>
            <CardDescription>Your latest fitness activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentWorkouts.map((workout, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div>
                    <p className="font-semibold text-foreground">{workout.date}</p>
                    <p className="text-sm text-muted-foreground">{workout.exercises}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{workout.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Goals Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Weekly Goal</CardTitle>
              <CardDescription>5 workouts per week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-primary font-semibold">3/5 completed</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Monthly Challenge</CardTitle>
              <CardDescription>50,000 steps this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-primary font-semibold">45,230/50,000 steps</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

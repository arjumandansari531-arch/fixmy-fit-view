import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { workouts } from "@/data/workouts";
import heroImage from "@/assets/hero-gym.jpg";
import shoulderImage from "@/assets/shoulder-workout.jpg";
import backImage from "@/assets/back-workout.jpg";
import absImage from "@/assets/abs-workout.jpg";

interface HomeProps {
  onGetStarted: () => void;
}

const Home = ({ onGetStarted }: HomeProps) => {
  const shoulderWorkouts = workouts.filter(w => w.category === "shoulder");
  const backWorkouts = workouts.filter(w => w.category === "back");
  const absWorkouts = workouts.filter(w => w.category === "abs");

  const categories = [
    { name: "Shoulder", image: shoulderImage, workouts: shoulderWorkouts, color: "from-purple-500/20 to-violet-500/20" },
    { name: "Back", image: backImage, workouts: backWorkouts, color: "from-blue-500/20 to-purple-500/20" },
    { name: "Abs", image: absImage, workouts: absWorkouts, color: "from-pink-500/20 to-purple-500/20" },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-500/20 text-green-300";
      case "intermediate": return "bg-yellow-500/20 text-yellow-300";
      case "advanced": return "bg-red-500/20 text-red-300";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Gym Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Your Personalized Fitness Journey
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Track your progress, achieve your goals, and transform your body
          </p>
          <Button onClick={onGetStarted} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Get Started
          </Button>
        </div>
      </section>

      {/* Workout Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Workout Programs</h2>
        
        {categories.map((category) => (
          <div key={category.name} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <img src={category.image} alt={category.name} className="w-20 h-20 rounded-lg object-cover shadow-lg" />
              <div>
                <h3 className="text-3xl font-bold text-primary">{category.name} Workouts</h3>
                <p className="text-muted-foreground">{category.workouts.length} exercises to master</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.workouts.map((workout) => (
                <Card key={workout.id} className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(144,93,220,0.2)]">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{workout.name}</CardTitle>
                      <Badge className={getDifficultyColor(workout.difficulty)}>
                        {workout.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-semibold text-foreground">Sets:</span> {workout.sets}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Reps:</span> {workout.reps}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose FitTrack?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Track Progress</CardTitle>
              <CardDescription>Monitor your fitness journey with detailed analytics</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Expert Workouts</CardTitle>
              <CardDescription>Access professionally designed workout programs</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Stay Motivated</CardTitle>
              <CardDescription>Join a community of fitness enthusiasts</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;

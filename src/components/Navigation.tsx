import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dumbbell, User } from "lucide-react";

interface NavigationProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
}

export const Navigation = ({ onLoginClick, isLoggedIn }: NavigationProps) => {
  return (
    <nav className="bg-secondary/50 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
            <Dumbbell className="w-6 h-6 text-primary" />
            FitTrack
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/workout" className="text-foreground hover:text-primary transition-colors font-medium">
                  Workout Entry
                </Link>
                <Link to="/exercises" className="text-foreground hover:text-primary transition-colors font-medium">
                  Exercises
                </Link>
                <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors font-medium">
                  Dashboard
                </Link>
              </>
            ) : (
              <Button onClick={onLoginClick} variant="ghost" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

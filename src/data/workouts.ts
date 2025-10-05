export interface Workout {
  id: number;
  name: string;
  category: string;
  sets: string;
  reps: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

export const workouts: Workout[] = [
  // Shoulder Workouts
  { id: 1, name: "Overhead Press", category: "shoulder", sets: "3-4", reps: "8-12", difficulty: "intermediate" },
  { id: 2, name: "Lateral Raises", category: "shoulder", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 3, name: "Front Raises", category: "shoulder", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 4, name: "Arnold Press", category: "shoulder", sets: "3-4", reps: "8-12", difficulty: "intermediate" },
  { id: 5, name: "Reverse Flyes", category: "shoulder", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 6, name: "Upright Rows", category: "shoulder", sets: "3", reps: "10-12", difficulty: "intermediate" },
  { id: 7, name: "Face Pulls", category: "shoulder", sets: "3", reps: "15-20", difficulty: "beginner" },
  { id: 8, name: "Pike Push-ups", category: "shoulder", sets: "3", reps: "10-15", difficulty: "intermediate" },
  { id: 9, name: "Dumbbell Shrugs", category: "shoulder", sets: "3-4", reps: "12-15", difficulty: "beginner" },
  { id: 10, name: "Handstand Push-ups", category: "shoulder", sets: "3", reps: "5-10", difficulty: "advanced" },

  // Back Workouts
  { id: 11, name: "Pull-ups", category: "back", sets: "3-4", reps: "8-12", difficulty: "intermediate" },
  { id: 12, name: "Bent-Over Rows", category: "back", sets: "3-4", reps: "8-12", difficulty: "intermediate" },
  { id: 13, name: "Deadlifts", category: "back", sets: "3-4", reps: "6-8", difficulty: "advanced" },
  { id: 14, name: "Lat Pulldowns", category: "back", sets: "3", reps: "10-12", difficulty: "beginner" },
  { id: 15, name: "Seated Cable Rows", category: "back", sets: "3", reps: "10-12", difficulty: "beginner" },
  { id: 16, name: "T-Bar Rows", category: "back", sets: "3-4", reps: "8-12", difficulty: "intermediate" },
  { id: 17, name: "Single-Arm Rows", category: "back", sets: "3", reps: "10-12", difficulty: "beginner" },
  { id: 18, name: "Hyperextensions", category: "back", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 19, name: "Inverted Rows", category: "back", sets: "3", reps: "10-15", difficulty: "intermediate" },
  { id: 20, name: "Wide-Grip Pull-ups", category: "back", sets: "3-4", reps: "6-10", difficulty: "advanced" },

  // Abs Workouts
  { id: 21, name: "Plank", category: "abs", sets: "3", reps: "30-60s", difficulty: "beginner" },
  { id: 22, name: "Crunches", category: "abs", sets: "3", reps: "15-20", difficulty: "beginner" },
  { id: 23, name: "Bicycle Crunches", category: "abs", sets: "3", reps: "20-30", difficulty: "intermediate" },
  { id: 24, name: "Leg Raises", category: "abs", sets: "3", reps: "12-15", difficulty: "intermediate" },
  { id: 25, name: "Russian Twists", category: "abs", sets: "3", reps: "20-30", difficulty: "intermediate" },
  { id: 26, name: "Mountain Climbers", category: "abs", sets: "3", reps: "20-30", difficulty: "intermediate" },
  { id: 27, name: "Ab Wheel Rollouts", category: "abs", sets: "3", reps: "8-12", difficulty: "advanced" },
  { id: 28, name: "Hanging Knee Raises", category: "abs", sets: "3", reps: "10-15", difficulty: "advanced" },
  { id: 29, name: "V-Ups", category: "abs", sets: "3", reps: "12-15", difficulty: "advanced" },
  { id: 30, name: "Dead Bug", category: "abs", sets: "3", reps: "10-12", difficulty: "beginner" },

  // Chest Workouts
  { id: 31, name: "Bench Press", category: "chest", sets: "3-4", reps: "8-12", difficulty: "intermediate" },
  { id: 32, name: "Push-ups", category: "chest", sets: "3", reps: "12-20", difficulty: "beginner" },
  { id: 33, name: "Incline Dumbbell Press", category: "chest", sets: "3", reps: "10-12", difficulty: "intermediate" },
  { id: 34, name: "Chest Flyes", category: "chest", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 35, name: "Decline Press", category: "chest", sets: "3", reps: "10-12", difficulty: "intermediate" },
  { id: 36, name: "Cable Crossovers", category: "chest", sets: "3", reps: "12-15", difficulty: "intermediate" },
  { id: 37, name: "Dips", category: "chest", sets: "3", reps: "8-12", difficulty: "intermediate" },
  { id: 38, name: "Diamond Push-ups", category: "chest", sets: "3", reps: "10-15", difficulty: "intermediate" },
  { id: 39, name: "Pec Deck Machine", category: "chest", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 40, name: "Plyometric Push-ups", category: "chest", sets: "3", reps: "8-10", difficulty: "advanced" },

  // Legs Workouts
  { id: 41, name: "Squats", category: "legs", sets: "3-4", reps: "8-12", difficulty: "intermediate" },
  { id: 42, name: "Lunges", category: "legs", sets: "3", reps: "10-12", difficulty: "beginner" },
  { id: 43, name: "Leg Press", category: "legs", sets: "3", reps: "10-12", difficulty: "beginner" },
  { id: 44, name: "Romanian Deadlifts", category: "legs", sets: "3-4", reps: "8-10", difficulty: "intermediate" },
  { id: 45, name: "Leg Curls", category: "legs", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 46, name: "Leg Extensions", category: "legs", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 47, name: "Bulgarian Split Squats", category: "legs", sets: "3", reps: "10-12", difficulty: "intermediate" },
  { id: 48, name: "Calf Raises", category: "legs", sets: "3-4", reps: "15-20", difficulty: "beginner" },
  { id: 49, name: "Goblet Squats", category: "legs", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 50, name: "Box Jumps", category: "legs", sets: "3", reps: "8-12", difficulty: "advanced" },

  // Biceps Workouts
  { id: 51, name: "Barbell Curls", category: "biceps", sets: "3", reps: "10-12", difficulty: "beginner" },
  { id: 52, name: "Hammer Curls", category: "biceps", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 53, name: "Preacher Curls", category: "biceps", sets: "3", reps: "10-12", difficulty: "intermediate" },
  { id: 54, name: "Concentration Curls", category: "biceps", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 55, name: "Cable Curls", category: "biceps", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 56, name: "21s Curls", category: "biceps", sets: "3", reps: "21", difficulty: "intermediate" },
  { id: 57, name: "Incline Dumbbell Curls", category: "biceps", sets: "3", reps: "10-12", difficulty: "intermediate" },
  { id: 58, name: "Spider Curls", category: "biceps", sets: "3", reps: "10-12", difficulty: "intermediate" },

  // Triceps Workouts
  { id: 59, name: "Tricep Dips", category: "triceps", sets: "3", reps: "10-12", difficulty: "intermediate" },
  { id: 60, name: "Overhead Tricep Extension", category: "triceps", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 61, name: "Tricep Pushdowns", category: "triceps", sets: "3", reps: "12-15", difficulty: "beginner" },
  { id: 62, name: "Close-Grip Bench Press", category: "triceps", sets: "3", reps: "8-10", difficulty: "intermediate" },
  { id: 63, name: "Skull Crushers", category: "triceps", sets: "3", reps: "10-12", difficulty: "intermediate" },
  { id: 64, name: "Diamond Push-ups", category: "triceps", sets: "3", reps: "10-15", difficulty: "intermediate" },
  { id: 65, name: "Kickbacks", category: "triceps", sets: "3", reps: "12-15", difficulty: "beginner" },

  // Cardio Workouts
  { id: 66, name: "Running", category: "cardio", sets: "1", reps: "20-30 min", difficulty: "beginner" },
  { id: 67, name: "Jump Rope", category: "cardio", sets: "3", reps: "2-3 min", difficulty: "intermediate" },
  { id: 68, name: "Burpees", category: "cardio", sets: "3", reps: "10-15", difficulty: "intermediate" },
  { id: 69, name: "High Knees", category: "cardio", sets: "3", reps: "30-60s", difficulty: "beginner" },
  { id: 70, name: "Jumping Jacks", category: "cardio", sets: "3", reps: "30-60s", difficulty: "beginner" },
  { id: 71, name: "Cycling", category: "cardio", sets: "1", reps: "30-45 min", difficulty: "beginner" },
  { id: 72, name: "Rowing Machine", category: "cardio", sets: "1", reps: "15-20 min", difficulty: "intermediate" },
  { id: 73, name: "Sprints", category: "cardio", sets: "5-8", reps: "30-60s", difficulty: "advanced" },
];

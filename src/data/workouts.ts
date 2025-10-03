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
];

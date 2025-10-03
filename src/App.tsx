import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { Navigation } from "./components/Navigation";
import { LoginModal } from "./components/LoginModal";

const queryClient = new QueryClient();

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleGetStarted = () => {
    setIsLoginOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation onLoginClick={() => setIsLoginOpen(true)} isLoggedIn={isLoggedIn} />
          <LoginModal open={isLoginOpen} onOpenChange={setIsLoginOpen} onLogin={handleLogin} />
          <Routes>
            <Route path="/" element={<Home onGetStarted={handleGetStarted} />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

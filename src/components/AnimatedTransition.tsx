
import React, { useState, useEffect } from "react";
import OnboardingScreen from "./OnboardingScreen";
import DashboardScreen from "./DashboardScreen";
import { Ripple, PlaneAnimation, IconPopAnimation, TransitionOverlay } from "./TransitionElements";
import { toast } from "@/components/ui/use-toast";
import { useTheme } from "@/hooks/useTheme";

const AnimatedTransition: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<"onboarding" | "dashboard" | "transitioning">("onboarding");
  const { darkMode, toggleTheme } = useTheme();
  const [ripple, setRipple] = useState({ show: false, x: 0, y: 0 });
  const [plane, setPlane] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [icons, setIcons] = useState<Array<{ id: number; icon: "plane" | "map" | "pin"; position: { top: string; left: string } }>>(
    []
  );

  // Clean up animations when component unmounts
  useEffect(() => {
    return () => {
      // Clear any pending timeouts - fixed the TypeScript error here
      const timerId = window.setTimeout(() => {}, 0);
      for (let i = 0; i <= timerId; i++) {
        clearTimeout(i);
      }
    };
  }, []);

  const handleContinue = () => {
    // Get button position for ripple effect
    const button = document.querySelector("button[type='submit']");
    if (button) {
      const rect = button.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      // Start transition sequence with optimized timing
      setCurrentScreen("transitioning");
      setRipple({ show: true, x, y });

      // Show toast notification
      toast({
        title: "Boarding your journey!",
        description: "Your adventure to Tokyo is being prepared...",
      });

      // Schedule icon animations with staggered timing for better performance
      setTimeout(() => {
        setIcons([
          { 
            id: 1, 
            icon: "plane", 
            position: { top: "30%", left: "20%" } 
          }
        ]);
        
        setTimeout(() => {
          setIcons(prev => [
            ...prev,
            { 
              id: 2, 
              icon: "map", 
              position: { top: "40%", left: "50%" } 
            }
          ]);
          
          setTimeout(() => {
            setIcons(prev => [
              ...prev,
              { 
                id: 3, 
                icon: "pin", 
                position: { top: "60%", left: "75%" } 
              }
            ]);
          }, 100);
        }, 100);
      }, 600);

      // Schedule plane animation
      setTimeout(() => {
        setPlane(true);
      }, 900);

      // Schedule background transition
      setTimeout(() => {
        setOverlay(true);
        if (darkMode) toggleTheme(); // Only toggle if currently in dark mode
      }, 1400);

      // Complete transition
      setTimeout(() => {
        setCurrentScreen("dashboard");
        // Clean up transition elements
        setTimeout(() => {
          setRipple({ show: false, x: 0, y: 0 });
          setPlane(false);
          setOverlay(false);
          setIcons([]);
        }, 100);
      }, 2600);
    }
  };

  // Handle icon removal with staggered timing for better performance
  const removeIcon = (id: number) => {
    setTimeout(() => {
      setIcons(prev => prev.filter(icon => icon.id !== id));
    }, id * 50); // Stagger removal by ID
  };

  return (
    <div className="relative w-full h-full">
      {/* Onboarding Screen */}
      <div
        className={`absolute inset-0 transition-all duration-500 will-change-transform ${
          currentScreen !== "onboarding"
            ? "scale-95 opacity-0 pointer-events-none"
            : ""
        }`}
      >
        <OnboardingScreen onContinue={handleContinue} />
      </div>

      {/* Dashboard Screen */}
      <div
        className={`absolute inset-0 transition-all duration-500 will-change-opacity ${
          currentScreen === "dashboard" ? "animate-fade-in" : "opacity-0 pointer-events-none"
        }`}
      >
        <DashboardScreen />
      </div>

      {/* Transition Elements - Only render when needed */}
      {currentScreen === "transitioning" && (
        <>
          {/* Ripple Effect with hardware acceleration */}
          {ripple.show && (
            <Ripple
              startX={ripple.x}
              startY={ripple.y}
              color="rgba(155, 135, 245, 0.3)"
            />
          )}

          {/* Flying Plane Animation with hardware acceleration */}
          {plane && (
            <PlaneAnimation className="top-1/3 inset-x-0 will-change-transform" />
          )}

          {/* Icon Pop Animations with hardware acceleration */}
          {icons.map((icon) => (
            <IconPopAnimation
              key={icon.id}
              icon={icon.icon}
              delay={(icon.id - 1) * 200}
              position={icon.position}
              onAnimationEnd={() => removeIcon(icon.id)}
            />
          ))}

          {/* Background Transition Overlay with hardware acceleration */}
          <TransitionOverlay show={overlay} />
        </>
      )}
    </div>
  );
};

export default AnimatedTransition;

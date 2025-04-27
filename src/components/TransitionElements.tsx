
import React from "react";
import { Plane, Map, MapPin } from "lucide-react";

interface RippleProps {
  startX: number;
  startY: number;
  color?: string;
  onAnimationEnd?: () => void;
}

export const Ripple: React.FC<RippleProps> = ({ 
  startX, 
  startY, 
  color = "rgba(255, 255, 255, 0.2)", 
  onAnimationEnd 
}) => {
  return (
    <div 
      className="absolute z-20 pointer-events-none animate-ripple will-change-transform"
      style={{
        left: startX,
        top: startY,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: color,
        transform: "translate(-50%, -50%)",
        transformOrigin: "center center",
      }}
      onAnimationEnd={onAnimationEnd}
    />
  );
};

export const PlaneAnimation: React.FC<{ className?: string, onAnimationEnd?: () => void }> = ({ 
  className,
  onAnimationEnd
}) => {
  return (
    <div 
      className={`fixed z-30 pointer-events-none animate-plane-fly will-change-transform ${className || ""}`}
      style={{ 
        backfaceVisibility: "hidden", 
        WebkitBackfaceVisibility: "hidden",
        perspective: "1000px", 
        WebkitPerspective: "1000px"
      }}
      onAnimationEnd={onAnimationEnd}
    >
      <Plane size={48} className="text-white filter drop-shadow-lg" />
    </div>
  );
};

export const IconPopAnimation: React.FC<{
  icon: "plane" | "map" | "pin";
  delay: number;
  position: { top: string; left: string };
  onAnimationEnd?: () => void;
}> = ({ icon, delay, position, onAnimationEnd }) => {
  const renderIcon = () => {
    switch (icon) {
      case "plane":
        return <Plane size={32} className="text-white" />;
      case "map":
        return <Map size={32} className="text-white" />;
      case "pin":
        return <MapPin size={32} className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed z-30 animate-bounce-in pointer-events-none will-change-transform"
      style={{
        top: position.top,
        left: position.left,
        animationDelay: `${delay}ms`,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        perspective: "1000px",
        WebkitPerspective: "1000px"
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {renderIcon()}
    </div>
  );
};

export const TransitionOverlay: React.FC<{
  show: boolean;
  onTransitionEnd?: () => void;
}> = ({ show, onTransitionEnd }) => {
  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-500 will-change-opacity ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        background: "linear-gradient(to bottom, rgba(26, 31, 44, 1), rgba(245, 245, 247, 0.7))",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden"
      }}
      onTransitionEnd={onTransitionEnd}
    />
  );
};

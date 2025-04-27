
import React from "react";

interface StatusBarProps {
  darkMode?: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({ darkMode = false }) => {
  return (
    <div className="status-bar w-full px-4 pt-3 pb-1 flex justify-between items-center">
      <div className="text-sm font-medium">9:41</div>
      <div className="flex items-center gap-1.5">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M17 0H1C0.4 0 0 0.5 0 1V11C0 11.6 0.4 12 1 12H17C17.6 12 18 11.6 18 11V1C18 0.5 17.6 0 17 0ZM16 10H2V2H16V10Z" 
            fill={darkMode ? "white" : "black"} 
          />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M8 2C10.3 2 12.3 3.1 13.4 5C12.3 6.9 10.3 8 8 8C5.7 8 3.7 6.9 2.6 5C3.7 3.1 5.7 2 8 2ZM8 0C4.5 0 1.5 2.1 0.2 5C1.5 7.9 4.5 10 8 10C11.5 10 14.5 7.9 15.8 5C14.5 2.1 11.5 0 8 0ZM8 3C8.8 3 9.5 3.7 9.5 4.5C9.5 5.3 8.8 6 8 6C7.2 6 6.5 5.3 6.5 4.5C6.5 3.7 7.2 3 8 3ZM8 1C6.1 1 4.5 2.6 4.5 4.5C4.5 6.4 6.1 8 8 8C9.9 8 11.5 6.4 11.5 4.5C11.5 2.6 9.9 1 8 1Z" 
            fill={darkMode ? "white" : "black"} 
          />
        </svg>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke={darkMode ? "white" : "black"} />
          <rect x="2" y="2" width="18" height="8" rx="1" fill={darkMode ? "white" : "black"} />
        </svg>
      </div>
    </div>
  );
};

export default StatusBar;

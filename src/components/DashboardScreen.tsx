
import React from "react";
import { Button } from "@/components/ui/button";
import StatusBar from "./StatusBar";
import { useTheme } from "@/hooks/useTheme";
import ThemeToggle from "./ThemeToggle";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DashboardScreenProps {
  darkMode?: boolean; // Added darkMode prop
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({ darkMode: propDarkMode }) => {
  const { darkMode } = useTheme();
  // Use the prop value if provided, otherwise use context value
  const isDarkMode = propDarkMode !== undefined ? propDarkMode : darkMode;

  return (
    <div 
      className={`min-h-screen w-full flex flex-col ${
        isDarkMode ? "bg-travel-dark text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center sticky top-0 z-10 bg-opacity-90 backdrop-blur-sm">
        <StatusBar darkMode={darkMode} />
        <div className="px-4 pt-3">
          <ThemeToggle />
        </div>
      </div>
      
      <ScrollArea className="flex-1 h-[calc(100vh-40px)] overflow-y-auto">
        <div className="px-4 py-4 pb-24">
          <div className="flex justify-between items-center mb-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold">Hello Chhavi!</h2>
              <p className="text-sm opacity-80">Ready for the trip?</p>
            </div>
            <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              C
            </div>
          </div>

          <h3 className="font-medium mb-3">Your Upcoming Trip</h3>
          
          <div className="rounded-2xl overflow-hidden mb-6 animate-fly-in">
            <div className="relative">
              <img 
                src="./asserts/Tokyo (2).png" 
                alt="Tokyo Skyline" 
                className="w-full h-48 object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-4xl font-bold text-white">TOKYO</h2>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white text-sm opacity-90">27.01.2025 - 02.02.2025</p>
                
                <div className="flex gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white text-xs">8 Days Duration</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white text-xs">4 (2M,2F)</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white text-xs">14 Activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Flight Details</h3>
              <span className="text-xs text-blue-400">See all</span>
            </div>
            <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} transform transition-transform hover:scale-[1.02] duration-300`}>
              <div className="p-3">
                <div className="text-xs text-white/80 mb-1">26.01.2025, 10:50 am</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">DEL</div>
                    <div className="text-xs text-white/80">Delhi, India</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-px w-16 bg-white/30"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.5 2H19.5L17.46 12H8.5C7.12 12 5.26 11.22 4.45 9.97C3.97 9.27 3.24 7.29 2.87 6.18C2.45 4.94 1.23 4 0 4V6C0.43 6 0.87 6.5 1.04 6.97L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V16H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12H22.5C23.33 12 24 11.33 24 10.5V3.5C24 2.67 23.33 2 22.5 2Z" fill="white"/>
                    </svg>
                    <div className="h-px w-16 bg-white/30"></div>
                  </div>
                  <div>
                    <div className="font-bold text-white">NRT</div>
                    <div className="text-xs text-white/80">Narita, Tokyo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Accommodation</h3>
              <span className="text-xs text-blue-400">See all</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transform transition-all hover:shadow-lg duration-300`}>
                <div className="h-24 overflow-hidden">
                  <img 
                    src="./asserts/image.png" 
                    alt="Shinagawa Prince Hotel" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="bg-blue-500 text-white text-xs py-0.5 px-2 rounded absolute top-1 left-1">
                    4.9 Very Good
                  </div>
                </div>
                <div className="p-2">
                  <h4 className="font-medium text-sm">Shinagawa Prince Hotel</h4>
                  <div className="text-xs opacity-80 mt-1">
                    <div>Check in: 26.01.2025, 11:15 pm</div>
                    <div>Check out: 28.01.2025, 11:15 am</div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs">2 Nights</span>
                    <div className="text-green-500 text-xs flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.9972 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Confirmed
                    </div>
                  </div>
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transform transition-all hover:shadow-lg duration-300`}>
                <div className="h-24 overflow-hidden">
                  <img 
                    src="./asserts/image (1).png" 
                    alt="Mercure Tokyo Hotel" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="bg-blue-500 text-white text-xs py-0.5 px-2 rounded absolute top-1 left-1">
                    4.1 Very Good
                  </div>
                </div>
                <div className="p-2">
                  <h4 className="font-medium text-sm">Mercure Tokyo Hotel</h4>
                  <div className="text-xs opacity-80 mt-1">
                    <div>Check in: 28.01.2025, 6:00 pm</div>
                    <div>Check out: 30.01.2025, 11:15 am</div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs">2 Nights</span>
                    <div className="text-orange-500 text-xs flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V12L15 15" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z" stroke="#F97316" strokeWidth="2"/>
                      </svg>
                      Pending
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Activities</h3>
              <span className="text-xs text-blue-400">See all</span>
            </div>
            
            <div className={`rounded-xl mb-3 overflow-hidden ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} transform transition-all hover:shadow-md duration-300`}>
              <div className="grid grid-cols-7">
                <div className="bg-green-500 col-span-1 flex flex-col items-center justify-center py-2 text-white">
                  <div className="text-xs">JAN</div>
                  <div className="font-bold text-lg">27</div>
                </div>
                <div className="col-span-6 p-2 flex items-center justify-between">
                  <div className="font-medium">Day Plan</div>
                  <div className="bg-green-100 text-green-800 text-xs py-0.5 px-2 rounded">14 Activities</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2 overflow-x-auto pb-2 mb-3 scrollbar-none">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, index) => (
                <div 
                  key={day} 
                  className={`flex-shrink-0 ${index === 0 ? "bg-green-500 text-white" : darkMode ? "bg-gray-800" : "bg-gray-100"} rounded-lg p-2 flex flex-col items-center justify-center w-12 transform transition-transform hover:scale-110 duration-300`}
                >
                  <div className="text-xs">{day}</div>
                  <div className="font-bold">{27 + index}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} transform transition-all hover:shadow-lg duration-300`}>
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <img 
                      src="/lovable-uploads/d4ee7167-7da8-416c-9dea-3b954ec57c5b.png" 
                      alt="Senso-ji Temple" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-span-2 p-3">
                    <h4 className="font-medium text-sm">Senso-ji Temple & Nakamise Shopping Street</h4>
                    <div className="mt-2 space-y-1 text-xs opacity-80">
                      <div>Timing: 8:15 am Morning</div>
                      <div>Duration: 3 hours</div>
                      <div>Pick up: From Hotel</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} transform transition-all hover:shadow-lg duration-300`}>
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <img 
                      src="/lovable-uploads/7f91f38c-0e74-43fc-9b77-2cc98a9a8d0c.png" 
                      alt="Tokyo Sky Tree" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-span-2 p-3">
                    <h4 className="font-medium text-sm">Tokyo Sky Tree</h4>
                    <div className="mt-2 space-y-1 text-xs opacity-80">
                      <div>Timing: 1:00 pm Afternoon</div>
                      <div>Duration: 3 hours</div>
                      <div>Pick up: From Nakamise Street</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add padding at the bottom for better scrolling */}
          <div className="h-24"></div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default DashboardScreen;

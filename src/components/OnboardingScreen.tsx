


interface OnboardingScreenProps {
  onContinue: () => void;
  darkMode?: boolean; // Added darkMode to props
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  onContinue
}) => {
  const { darkMode } = useTheme();
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [companion, setCompanion] = useState("");

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <div 
      className={`min-h-screen w-full flex flex-col transition-all duration-500 ${
        darkMode ? "bg-travel-dark text-white" : "bg-travel-light text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center">
        <StatusBar darkMode={darkMode} />
        <div className="px-4 pt-3">
          <ThemeToggle />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col px-6 py-4 transition-all duration-500">
        <h1 className="text-3xl font-bold mt-8 mb-2">
          Plan Your Journey, Your Way!
        </h1>
        <p className="text-lg mb-8 opacity-80">
          Let's create your personalised travel experience
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <label className="text-lg font-medium">Where would you like to go?</label>
            <div className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}>
              <MapPin size={20} className={darkMode ? "text-gray-400" : "text-gray-500"} />
              <input
                type="text"
                placeholder="Enter Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-transparent w-full outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-lg font-medium">How long will you stay?</label>
            <div className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={darkMode ? "text-gray-400" : "text-gray-500"}
              >
                <path 
                  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className={`bg-transparent w-full outline-none appearance-none ${
                  !duration ? (darkMode ? "text-gray-400" : "text-gray-500") : ""
                }`}
                required
              >
                <option value="" disabled>Select Duration</option>
                <option value="3-5">3-5 days</option>
                <option value="6-10">6-10 days</option>
                <option value="11-15">11-15 days</option>
                <option value="15+">15+ days</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-lg font-medium">Who are you traveling with?</label>
            <div className="grid grid-cols-2 gap-4">
              {["Solo", "Couple", "Family", "Friends"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setCompanion(type)}
                  className={`flex items-center justify-center gap-2 py-4 rounded-lg transition-all ${
                    companion === type
                      ? "bg-travel-primary text-white"
                      : darkMode
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {type === "Solo" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" 
                            fill="currentColor"/>
                    </svg>
                  )}
                  {type === "Couple" && (
                    <svg width="24" height="16" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12ZM10 14C7.33 14 2 15.34 2 18V20H18V18C18 15.34 12.67 14 10 14Z" 
                            fill="currentColor"/>
                      <path d="M26 12C28.21 12 30 10.21 30 8C30 5.79 28.21 4 26 4C23.79 4 22 5.79 22 8C22 10.21 23.79 12 26 12ZM26 14C23.33 14 18 15.34 18 18V20H34V18C34 15.34 28.67 14 26 14Z" 
                            fill="currentColor"/>
                    </svg>
                  )}
                  {type === "Family" && (
                    <svg width="24" height="16" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12C10.21 12 12 10.21 12 8C12 5.79 10.21 4 8 4C5.79 4 4 5.79 4 8C4 10.21 5.79 12 8 12ZM8 14C5.33 14 0 15.34 0 18V20H16V18C16 15.34 10.67 14 8 14Z" 
                            fill="currentColor"/>
                      <path d="M24 12C26.21 12 28 10.21 28 8C28 5.79 26.21 4 24 4C21.79 4 20 5.79 20 8C20 10.21 21.79 12 24 12ZM24 14C21.33 14 16 15.34 16 18V20H32V18C32 15.34 26.67 14 24 14Z" 
                            fill="currentColor"/>
                      <path d="M16 6C16 3.79 17.79 2 20 2C22.21 2 24 3.79 24 6C24 8.21 22.21 10 20 10C17.79 10 16 8.21 16 6ZM20 12C17.33 12 12 13.34 12 16V18H28V16C28 13.34 22.67 12 20 12Z" 
                            fill="currentColor"/>
                    </svg>
                  )}
                  {type === "Friends" && (
                    <svg width="24" height="16" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 13C18.21 13 20 11.21 20 9C20 6.79 18.21 5 16 5C13.79 5 12 6.79 12 9C12 11.21 13.79 13 16 13ZM8 13C10.21 13 12 11.21 12 9C12 6.79 10.21 5 8 5C5.79 5 4 6.79 4 9C4 11.21 5.79 13 8 13ZM8 15C5.33 15 0 16.34 0 19V21H16V19C16 16.34 10.67 15 8 15ZM16 15C15.71 15 15.38 15.02 15.03 15.05C16.19 15.89 17 17.02 17 19V21H28V19C28 16.34 22.67 15 16 15ZM24 13C26.21 13 28 11.21 28 9C28 6.79 26.21 5 24 5C21.79 5 20 6.79 20 9C20 11.21 21.79 13 24 13ZM24 15C21.33 15 16 16.34 16 19V21H32V19C32 16.34 26.67 15 24 15Z" 
                            fill="currentColor"/>
                    </svg>
                  )}
                  <span>{type}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-8">
            <Button 
              type="submit"
              disabled={!destination || !duration || !companion}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg text-lg font-medium"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingScreen;

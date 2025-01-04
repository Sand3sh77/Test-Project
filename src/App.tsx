import { useEffect, useState } from "react";
import MainHeroSection from "./components/mainHeroSection";
import Navbar from "./components/navbar";
import NavigationSection from "./components/navigationSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Set dark mode class to html
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  return (
    <div className="bg-[#EDEDF3] text-black dark:bg-[#2E2E33] font-inter dark:text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex mt-[8px] gap-[8px] max-w-[100vw] overflow-hidden">
        <div className="max-w-[240px]">
          <NavigationSection />
        </div>

        <div className="flex-1 overflow-auto">
          <MainHeroSection />
        </div>
      </div>
    </div>
  );
}

export default App;

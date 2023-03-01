import { useState, useEffect } from "react";
import { Button } from "../Button"

export const DarkModeButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  const oppositeTheme = theme === "light" ? "Dark" : "Light"

  return <Button 
    type="primary" 
    title={`Enable ${oppositeTheme} Mode`}
    onClick={toggleTheme}
    className="absolute left-[24px] bottom-[24px] px-[48px] py-[16px] font-bold text-[20px] uppercase"
  />
}
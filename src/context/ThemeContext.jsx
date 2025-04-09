// ThemeContext.js
import { useState, createContext, useContext, useEffect } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };

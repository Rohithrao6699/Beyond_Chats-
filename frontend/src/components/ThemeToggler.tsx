import { useEffect, useState } from "react";
import { NightMode } from "../assets/icons/nightMode";
import { Button } from "../UI/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.querySelector("html")?.classList.add("dark");
      setIsDark(true);
    } else {
      document.querySelector("html")?.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="icon"
      textstyles="lg"
      size="sm"
      icon={<NightMode size="md" />}
    />
  );
}

import React from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 right-1">
      <Switch
        size="sm"
        color="default"
        checked={theme === "dark"}
        onChange={toggleTheme}
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      />
    </div>
  );
};

export default ThemeToggle;

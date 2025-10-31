import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-white dark:bg-[#211E1E] flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#F3F3F3] dark:hover:bg-[rgba(33,30,30,0.8)] transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-[#211E1E] dark:text-white" />
      ) : (
        <Moon className="h-5 w-5 text-[#211E1E] dark:text-white" />
      )}
    </button>
);

}

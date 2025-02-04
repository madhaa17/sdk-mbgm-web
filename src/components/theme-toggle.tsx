import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="px-3"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

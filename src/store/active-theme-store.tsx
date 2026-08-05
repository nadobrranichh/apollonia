import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useActiveThemeStore = create<{
  activeTheme: "light" | "dark";
  setActiveTheme: (newTheme: "light" | "dark") => void;
}>()(
  persist(
    (set) => ({
      activeTheme: "light",
      setActiveTheme: (newTheme: "light" | "dark") =>
        set(() => ({ activeTheme: newTheme })),
    }),
    { name: "theme" },
  ),
);

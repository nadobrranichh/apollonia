import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useActiveThemeStore = create<{
  activeTheme: "light" | "dark";
  toggleActiveTheme: () => void;
}>()(
  persist(
    (set) => ({
      activeTheme: "light",
      toggleActiveTheme: () =>
        set(({ activeTheme }) => ({
          activeTheme: activeTheme === "light" ? "dark" : "light",
        })),
    }),
    { name: "theme" },
  ),
);

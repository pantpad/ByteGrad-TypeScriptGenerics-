import { useState } from "react";
import ThemesList from "./ThemesList";

export default function Themes() {
  const [theme, setTheme] = useState("light");
  const THEMES = ["light", "dark", "system"];

  return (
    <>
      <section style={{ textAlign: "center" }}>
        <h1>themes</h1>
        <h2>Current Theme: {theme}</h2>
        <ThemesList
          themeOptions={THEMES}
          onThemeClick={(theme) => setTheme(theme)}
        />
      </section>
    </>
  );
}

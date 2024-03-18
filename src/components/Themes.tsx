import { useState } from "react";

const THEMES = ["light", "dark", "system"];

export default function Themes() {
  const [theme, setTheme] = useState("");
  return (
    <>
      <section style={{ textAlign: "center" }}>
        <h1>themes</h1>
        <h2>Current Theme: {theme}</h2>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {THEMES.map((theme, index) => (
            <li key={index}>
              <button onClick={() => setTheme(theme)}>{theme}</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

type themeListProps = {
  themeOptions: string[];
};

export default function ThemesList({ themeOptions }: themeListProps) {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {themeOptions.map((theme, index) => (
        <li key={index}>
          <button onClick={() => setTheme(theme)}>{theme}</button>
        </li>
      ))}
    </ul>
  );
}

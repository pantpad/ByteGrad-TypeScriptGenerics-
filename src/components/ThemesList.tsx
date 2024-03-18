type themeListProps<T> = {
  themeOptions: T[];
};

export default function ThemesList<T>({ themeOptions }: themeListProps<T>) {
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

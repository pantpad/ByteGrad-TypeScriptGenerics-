// type themeListProps = {
//   themeOptions: string[];
// };

export default function ThemesList({
  themeOptions,
}: {
  themeOptions: string[];
}) {
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

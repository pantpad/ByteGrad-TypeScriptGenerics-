type themeListProps<T> = {
  themeOptions: T[];
  onThemeClick: (theme: T) => void;
};

export default function ThemesList<T extends React.ReactNode>({
  themeOptions,
  onThemeClick,
}: themeListProps<T>) {
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
          <button onClick={() => onThemeClick(theme)}>{theme}</button>
        </li>
      ))}
    </ul>
  );
}

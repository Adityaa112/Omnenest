import {useTheme} from '../context/ThemeContext';

function ThemePage() {
    const { theme, toggleTheme } = useTheme();

    const bg = theme === "dark" ? "#222" : "#f5f5f5";
    const color = theme === "dark" ? "#fff" : "#222";

    return (
        <div style={{ backgroundColor: bg, color: color, minHeight: "100vh", padding: "40px" }}>
            <h2>Current Theme: {theme}</h2>
            <button onClick={toggleTheme} style={{ padding: "10px 24px", fontSize: "16px", cursor: "pointer",
                backgroundColor: theme === "dark" ? "#fff" : "#333", color: theme === "dark" ? "#333" : "#fff"
             }}>
                Switch to {theme === "dark" ? "Light" : "Dark"} Theme
            </button>
        </div>
    );
}

export default ThemePage;
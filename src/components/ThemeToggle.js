import React from "react";

function ThemeToggle() {
    const [darkMode, setDarkMode] = React.useState(false);

    const pageStyles = {
        height: "100vh",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: darkMode ? "#121212" : "#f0f0f0",
        color: darkMode ? "#f0f0f0" : "#121212",
        transition: "all 0.3s ease"
    };

    const boxStyles = {
        backgroundColor: darkMode ? "#333" : "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: darkMode
            ? "0 0 15px rgba(255, 255, 255, 0.1)"
            : "0 0 15px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        transition: "all 0.3s ease"
    };

    const buttonStyles = {
        marginTop: "20px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: darkMode ? "#555" : "#ddd",
        color: darkMode ? "#fff" : "#000"
    };

    return (
        <div style={pageStyles}>
            <div style={boxStyles}>
                <h2>Theme Mode</h2>
                <h3>{darkMode ? "Dark Mode" : "Light Mode"}</h3>
                <button style={buttonStyles} onClick={() => setDarkMode(!darkMode)}>
                    Toggle
                </button>
            </div>
        </div>
    );
}

export default ThemeToggle;

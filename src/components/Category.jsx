import React, { useState, useEffect } from "react";

export default function Category() {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };
  return (
    <input
      type="checkbox"
      className="toggle toggle-primary"
      defaultChecked={theme === "dark"}
      onChange={toggleTheme}
    />
  );
}

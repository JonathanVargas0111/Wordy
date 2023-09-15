import { useState } from "react";

import styles from "../App.module.scss";


const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className={styles.header}>
    <div className={styles.logo}>Wordy</div>
    <button className={styles.themeButton} onClick={toggleTheme}>
      {
        theme === "light" ? "dark" : "light"
      }
    </button>
  </header>
  )
}

export default Header
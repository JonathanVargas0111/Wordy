// src/App.js

import { useState } from "react";
import styles from "./App.module.scss";
import ContentAnalyzer from "./components/ContentAnalyzer/ContentAnalyzer";

function App() {
  const [theme, setTheme] = useState("dark");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRegister = () => {
    // Aquí puedes implementar la lógica para guardar la dirección de correo electrónico
    // y enviar actualizaciones cuando la aplicación esté disponible.
    setIsRegistered(true);
  };

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <header className={styles.header}>
        <div className={styles.logo}>Wordy</div>
        <button className={styles.themeButton} onClick={toggleTheme}>
          {theme === "light" ? "dark" : "light"}
        </button>
      </header>
      <main className={styles.content}>
        <h3>Un glosario automático para comprender el contenido.</h3>
        <h1>¿Quieres mejorar tu inglés mientras disfrutas de YouTube?</h1>
        <p>
          Una solución basada en IA que te ayuda a entender rápidamente los videos de YouTube, identificando las palabras clave.
        </p>
        {isRegistered ? (
          <p>¡Gracias por registrarte! Te informaremos cuando la aplicación esté disponible.</p>
        ) : (
          <div className={styles.register}>
            <input
              type="email"
              placeholder="Eamil"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={handleRegister}>subscribe </button>
          </div>
        )}
        <ContentAnalyzer/>
      </main>
    </div>
  );
}

export default App;


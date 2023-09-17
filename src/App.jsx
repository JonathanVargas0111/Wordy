// src/App.js

import { useState } from "react";
import styles from "./App.module.scss";
import ContentAnalyzer from "./components/ContentAnalyzer/ContentAnalyzer";
import Footer from "./components/Footer/Footer";
import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import {MdDarkMode} from 'react-icons/md'
import {BsSun} from 'react-icons/bs'

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
            {theme === "light" ? <MdDarkMode/> : <BsSun/>}
          </button>        
      </header>
      <main className={styles.content}>
        <span>Próximamente <HiOutlineRocketLaunch className={styles.RocketLaunch} /></span>
        <h1>Mejora tu inglés mientras
          <br />
          <span>
            Disfrutas de YouTube
          </span>
        </h1>
        <p>
          Una solución basada en IA que te ayuda a entender rápidamente los videos de YouTube, <br />identifica las palabras clave del contenido.
        </p>
        <div className={styles.register}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleRegister}>Join the waitlist </button>
        </div>
        <div className={styles.containerInoSend}>
        {isRegistered ? (
          <p className={styles.infoSend}> ¡Gracias por registrarte! Te informaremos cuando la aplicación esté disponible.</p>
          ) : (null)}
        </div>
        <ContentAnalyzer />
      </main>
      <Footer />
    </div>
  );
}

export default App;


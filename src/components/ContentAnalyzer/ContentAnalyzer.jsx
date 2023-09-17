// ContentAnalyzer.js

import styles from './ContentAnalyzer.module.scss';

import { FaListUl } from 'react-icons/fa'
import { BiSolidAnalyse } from 'react-icons/bi'
import { BiSolidPaste } from 'react-icons/bi'

function ContentAnalyzer() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div>
                    <BiSolidPaste />
                </div>
                <h2>
                    Ingresar el Enlace del Video
                </h2>
                <p>
                    Pega o escribe el enlace del video de YouTube
                </p>
            </div>
            <div className={styles.item}>
                <div>
                    <BiSolidAnalyse />
                </div>
                <h2>
                    Analiza el Contenido
                </h2>
                <p>
                La aplicación procesa el video, analiza el contenido para identificar palabras clave y contexto. Luego, genera una lista de palabras clave importantes
                </p>
            </div>
            <div className={styles.item}>
                <div>
                    <FaListUl />
                </div>
                <h2>
                    Lista de palabras
                </h2>
                <p>
                    Opcionalmente, traduce palabras clave y muestra imágenes relacionadas
                </p>
            </div>
        </div>
    );
}

export default ContentAnalyzer;

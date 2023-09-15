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
                <h3>
                    Ingresar el Enlace del Video
                </h3>
                <p>
                    Pega o escribe el enlace del video de YouTube
                </p>
            </div>
            <div className={styles.item}>
                <div>
                    <BiSolidAnalyse />
                </div>
                <h3>
                    Analizar el Contenido
                </h3>
                <p>
                    La aplicación procesará el video y generará palabras clave
                </p>
            </div>
            <div className={styles.item}>
                <div>
                    <FaListUl />
                </div>
                <h3>
                    Lista de palabras
                </h3>
                <p>
                    Opcionalmente, traduce palabras clave y muestra imágenes relacionadas
                </p>
            </div>
        </div>
    );
}

export default ContentAnalyzer;

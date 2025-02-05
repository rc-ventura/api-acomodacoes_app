import React from "react";
import styles from "./BackButton.module.css";

const BackButton = () => {
    return (
        <button className={styles.backLink} onClick={() => window.history.back()}>Voltar</button>
    );
    };

    export default BackButton;
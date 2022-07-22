import React from "react";
import styles from './styles.module.css';

export default function Column({children}) {
    return (
        <div className={styles.columnElement}>{children}</div>
    );
}
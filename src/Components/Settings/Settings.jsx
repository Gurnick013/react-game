import React from "react";
import {Button} from "antd";
import styles from './Settings.module.css';
import BackButton from "../BackButton/back";

const Settings = (props) => {
    return (
        <div className={styles.settingsWrapper}>
            <div className={styles.buttonsBlock}>
                <Button onClick={ () => {
                        localStorage.setItem('gameMode', 'easy');
                        localStorage.setItem('speed', '150');
                    }
                }>Easy</Button>
                <Button onClick={ () => {
                    localStorage.setItem('gameMode', 'medium');
                    localStorage.setItem('speed', '100');
                }
                }>Medium</Button>
                <Button onClick={ () => {
                    localStorage.setItem('gameMode', 'hard');
                    localStorage.setItem('speed', '100');
                }
                }>Hard</Button>
            </div>
            <BackButton/>
        </div>
    )
}

export default Settings;
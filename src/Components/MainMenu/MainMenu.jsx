import React from 'react';
import {Button} from 'antd';
import styles from './MainMenu.module.css'
import Footer from "../Footer/Footer";

const MainMenu = () => {
    if (!localStorage.getItem('volume')) localStorage.setItem('volume', '0.5');
    return (

        <div className={styles.wrapper}>
            <div className={styles.header}>
                SNAKE GAME
            </div>
            <div className={styles.menuButtons}>
                <Button type="primary" href='/play'>New Game</Button>
                <Button href='/scoreboard'>
                    Scoreboard
                </Button>
                <Button href='/settings'>
                    Settings
                </Button>
                <Button href='/how_to_play'>
                    How to play
                </Button>
                <Button href='/about'>
                    About
                </Button>
                <Footer/>
            </div>
        </div>
    )
}
export default MainMenu;
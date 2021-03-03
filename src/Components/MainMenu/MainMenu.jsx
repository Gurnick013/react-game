import React from 'react';
import {Button} from 'antd';
import styles from './MainMenu.module.css'
import Footer from "../Footer/Footer";
import {NavLink} from "react-router-dom";

const MainMenu = () => {
    if (!localStorage.getItem('volume')) localStorage.setItem('volume', '0.5');
    return (

        <div className={styles.wrapper}>
            <div className={styles.header}>
                SNAKE GAME
            </div>
            <div className={styles.menuButtons}>
                <NavLink className = {styles.navlik}  to='/play'>New Game</NavLink>
                <NavLink className = {styles.navlik} to='/scoreboard'>
                    Scoreboard
                </NavLink>
                <NavLink className = {styles.navlik} to='/settings'>
                    Settings
                </NavLink>
                <NavLink className = {styles.navlik} to='/how_to_play'>
                    How to play
                </NavLink>
                <NavLink className = {styles.navlik} to='/about'>
                    About
                </NavLink>
                <Footer/>
            </div>
        </div>
    )
}
export default MainMenu;
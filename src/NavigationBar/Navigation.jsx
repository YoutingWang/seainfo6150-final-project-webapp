import React from 'react';
import styles from './Navigation.module.css';
import Logo from "../images/Logo.jpg";
import { useHistory } from "react-router-dom";

const Navigation = (props) => {
    const history = useHistory();

    function handleClick() {
        history.push("/login");
    }

    function handleClickSign() {
        history.push("/signup");
    }

    return (
        <div className = {styles.header}>
                <div className = {styles.left} >
                    <img className = {styles.logo} src={Logo} alt="Logo" />
                    <h1 className = {styles.title}>Yummy Restaurants</h1>    
                </div>
                <div className = {styles.right}>
                    <button type="button" onClick={handleClick}>
                        Log in
                    </button>
                    <button type="button" onClick={handleClickSign}>
                        Sign up
                    </button>
                </div>

        </div>
    )
    
}

export default Navigation
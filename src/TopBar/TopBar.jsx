import React from 'react';
import { useHistory } from "react-router-dom";
import styles from "./TopBar.module.css";

const TopBar = (props) => {
    const history = useHistory();
    function handleClickHome() {
        history.push("/");
    }
    function handleClickAbout() {
        history.push("/about");
    }
    function handleClickContact() {
        history.push("/contact");
    }
    return (
        <div className={styles.topBar}>
            <nav>
                <button type="button" onClick={handleClickHome}>
                    Home
                </button>
                <button type="button" onClick={handleClickAbout}>
                    About
                </button>
                <button type="button" onClick={handleClickContact}>
                    Contact us
                </button>
            </nav>
        </div>
        
    )
}

export default TopBar

import React from 'react'
import styles from './LoginPage.module.css';
import { Link } from "react-router-dom";
import logo from "../images/Logo.jpg"
const Login = () => {
    return (
        <div>
            <div className={styles.div}>
                <h2 className = {styles.text}>Login</h2>
                <img className={styles.img} src={logo} alt="logo"/>
            </div>
            <form className={styles.form} onSubmit>
            <label htmlFor="name">User Name</label><br/>
            <input className={styles.input} type="text" required = "requried" name = "User Name" placeholder = "Name" id = "name"/><br/>
            <label htmlFor="email">Email</label><br/>
            <input className={styles.input} type = "email" required = "required" name = "Email" placeholder = "Email" id = "email"/> <br/>
            <label htmlFor="password">Password</label><br/>
            <input className={styles.input} type = "password" required = "required" name = "Password" placeholder = "Password" id = "password"/><br/>
            <Link to = "/">
                <input className={styles.button} type="submit" value="Log in" />
            </Link>
          </form>
        </div>
    )
}

export default Login
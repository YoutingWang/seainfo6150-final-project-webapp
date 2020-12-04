import React from 'react'
import styles from './Error.module.css';


const Error = () => {
    return (
        <div>
            <header className = {styles.header}> Oops! </header>
            <p className = {styles.text}> We can't seem to find the page you are looking for. </p>
            <p className = {styles.text}>Error code: 404</p>
        </div>
    )
}

export default Error

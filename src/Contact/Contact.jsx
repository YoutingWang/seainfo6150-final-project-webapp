import React from "react";
import Navigation from "../NavigationBar/Navigation";
import styles from "./Contact.module.css";
import { useHistory } from "react-router-dom";

const Contact = () => {
    const history = useHistory();
    function handleClick() {
        history.push("/");
    }
    return (
        <div>
            <Navigation/>
            <h2 className={styles.h2}>Contact Us</h2>
            <p className={styles.text}>If you have any questions, please leave your name and contact information. We will contact you later!</p>
            <form className={styles.form}>
            <label className={styles.text} htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" /><br/>
            
            <label className={styles.text} htmlFor="email">Email</label>
            <input type = "email" required = "required" name = "Email" placeholder = "Email" id = "email"/> <br/>

            <label className={styles.text} htmlFor="phonenumber">Phone Number</label>
            <input type = "tel" required = "required" name = "PhoneNumber" placeholder = "PhoneNumber" id = "phonenumber"/><br/>

            <label className={styles.text} htmlFor="City">Which city do you live in? </label>
            <select name="City" id="City">
              <option value="San Jose">San Jose</option>
              <option value="LA">LA</option>
              <option value="Seattle">Seattle</option>
              <option value="New York">New York</option>
            </select>
            <br/>

            <input className={styles.button} type="submit" value="Submit" onClick={handleClick} />
        
          </form>
        </div>
    );
};

export default Contact;
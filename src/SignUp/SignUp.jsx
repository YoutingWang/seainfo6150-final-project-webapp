import React, { useState } from "react";
import styles from "./SignUp.module.css"
import logo from "../images/Logo.jpg"
const SignUp = () => {
   const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      <div className={styles.div}>
                <h2 className = {styles.text}>Sign up</h2>
                <img className={styles.img} src={logo} alt="logo"/>
            </div>
      {
        submittedForm ? (
          <div>Welcome {submittedForm.get("User Name")}. Enjoy!</div>
        ) : (
            <form className={styles.form} onSubmit={onSubmit}>
            <label htmlFor="name">User Name</label>
            <input className={styles.input} type="text" required = "requried" name = "User Name" placeholder = "Name" id = "name"/>
            <label htmlFor="email">Email</label>
            <input className={styles.input} type = "email" required = "required" name = "Email" placeholder = "Email" id = "email"/> 
            <label htmlFor="password">Password</label>
            <input className={styles.input} type = "password" required = "required" name = "Password" placeholder = "Password" id = "password"/>
            <label htmlFor="zipcode">Zipcode</label>
            <input className={styles.input} type="text" pattern="[0-9]{5}" required = "required" name = "Zipcode" placeholder = "Zipcode" id = "zipcode"/>
            <label htmlFor="phonenumber">Phone Number</label>
            <input className={styles.input} type = "tel" required = "required" name = "PhoneNumber" placeholder = "PhoneNumber" id = "phonenumber"/>
            
            <label htmlFor="gender">Gender</label><br/>
            <input type = "checkbox" id = "male"/>
            <label htmlFor="male">Male</label>
            <input type = "checkbox" id = "female"/>
            <label htmlFor="female">Female</label>
            <input type = "checkbox" id = "none"/>
            <label htmlFor="n/a">Decline to self identify</label><br/>

            <label htmlFor="Locations">Location</label>
            <select name="location" id="location">
              <option value="San Jose">San jose</option>
              <option value="LA">LA</option>
              <option value="New York">New York</option>
            </select><br/>
            <input className={styles.button} type="submit" value="Sign up" />
          </form>
        )
      }
    </div>
  )
}

export default SignUp
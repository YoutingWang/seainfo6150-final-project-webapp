import React from "react";
import styles from "./About.module.css";
import about from "../images/about.jpeg";
import aboutme from "../images/AboutMe.JPG";
import Navigation from "../NavigationBar/Navigation";
const About = () => {
    return (
        <div>
            <Navigation/>
            <header className={styles.header}>Welcome</header>
            <img className={styles.background} src={about}
                alt="About"/>
            <p className={styles.text}>Here are some yummy restaurants, 
               we provide all kinds of restaurants in the world. Enjoy!</p>
            <h2 className={styles.header}>About me</h2>
            <img className={styles.img} src={aboutme} alt="about me"/>
            <p className={styles.text}>Youting Wang</p>
            <p className={styles.text}>Northeastern University</p>
            <p className={styles.text}>Information Systems</p>
            <p className={styles.text}>Enroll in 19 Fall</p>
            <p className={styles.text}>I am very interested in the food in the world. I also like to study how to make them. 
            I hope I can bring you my passion for food. Hope you can enjoy the food.</p>
        </div>
    );
};

export default About;
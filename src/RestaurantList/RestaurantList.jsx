import React from 'react'
import styles from "./RestaurantList.module.css"
import Restaurant from "../Restaurant/Restaurant.jsx"
const RestaurantList = (props) => {
    return (
        <div>
            <ul className = {styles.restaurantList}>
                {props.businesses.map(business => 
                    <li className={styles.restaurantGrid}>
                    <Restaurant  key = {business.id}  business={business}/>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default RestaurantList;
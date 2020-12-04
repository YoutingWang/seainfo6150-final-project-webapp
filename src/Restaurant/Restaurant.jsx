import React from 'react'
import styles from "./Restaurant.module.css"

const Restaurant = (props) => {
    const business = props.business;
    if (!business) {
        return <div>You have no data!</div>;
    }

    const tags = business.categories.map(category => (<span className={styles.tag} key={business.id + category.title}>{category.title}</span>));
    const addressLines = business.location.display_address.map(addressLine => <p key={business.id + addressLine}>{addressLine}</p>);

    return (
        <div className={styles.result}>
            <img className={styles.img} src={business.image_url} alt='image'/>
            <div className={styles.info}>
                <h2 className="subtitle">{business.name}</h2>
                <p>{business.price} {tags}</p>
            </div>
            <div className={styles.contact}>
                <p>{business.phone}</p>
                {addressLines}
            </div>
        </div>
    )
}

export default Restaurant;
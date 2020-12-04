import React, {useState} from 'react';
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        e.preventDefault();
    }

    return (
        <form onSubmit={submit}>
            <div className={styles.textBox}>
            <div>
                    <p className={styles.text}>Name</p>
            </div>
                <p>
                    <input className={styles.input}
                           onChange={(e) => setTerm(e.target.value)}
                           type="text"
                           value={term}
                           placeholder="pizza, chinese..."
                    />
                </p>
                <div>
                    <p className={styles.text}>Location</p>
                </div>
                <p>
                    <input className={styles.input}
                           onChange={(e) => setLocation(e.target.value)}
                           type="text"
                           placeholder="where..."/>
                </p>
                <div onClick={submit}>
                </div>
                <p>
                    <button className={styles.button}>Search</button>
                </p>
            </div>
        </form>
    );
}

export default SearchBar;
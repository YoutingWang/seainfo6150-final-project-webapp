import React from 'react';
import styles from "./Home.module.css";
import Navigation from '../NavigationBar/Navigation';
import SearchBar from "../SearchBar/SearchBar";
import useReactRouter from 'use-react-router';

export function Home() {
    const {history} = useReactRouter();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(
        `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
        );
    }
    return (
        <div>
            <Navigation/>
            <p className = {styles.title}>
                Hope you can find the food you like! Enjoy!
            </p>
            <SearchBar search = {search}/>
        </div>
    )
}

export default Home

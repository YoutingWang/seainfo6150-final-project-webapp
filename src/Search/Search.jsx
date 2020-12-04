import React from 'react';
import Navigation from '../NavigationBar/Navigation';
import RestaurantLists from '../RestaurantList/RestaurantList';
import businessSearch from '../Data/Search';
import SearchBar from '../SearchBar/SearchBar';
import useReactRouter from 'use-react-router';


const Search = () => {
    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, performSearch] = businessSearch(term, locationParam);

    if (!term || !locationParam) {
        return <div>You need to type in the keyword and location at the same time!</div>;
    }

    function search(term, location) {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
        performSearch({term, location});
    }

    return (
        <div>
            <Navigation term={term} location={locationParam} search={search}/>
            <SearchBar term={term} location={location} search={search}/>
            <RestaurantLists businesses={businesses}/>
        </div>
    );
}

export default Search
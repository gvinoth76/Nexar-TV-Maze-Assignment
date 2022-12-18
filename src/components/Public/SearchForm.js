import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './main.scss'
import logo from '../../assets/img/logo.png';

const SearchForm = ({ pending, searchDetails, searchValue, handleSearchCategory, handleSearchResult, ...props }) => {
    
    return (
        <div className={"wrapper homeWrapper"}>
            <div className={"searchWrapper"}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="searchbar">
                    <input type="text" value={searchValue} placeholder="Search for TV shows" onChange={(e) => handleSearchCategory(e)}/>
                    <button className="searchBtn" onClick={() => handleSearchResult()}>Search</button>
                </div>
            </div>
        </div>
    )
    
}

SearchForm.propTypes = {
	pending: PropTypes.bool
};

export default SearchForm;
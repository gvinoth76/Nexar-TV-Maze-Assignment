import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './main.scss'
import logo from '../../assets/img/logo.png';
import RatingForm from './RatingForm';

const SearchList = ({ pending, searchDetails, searchValue, handleSearchCategory, handleSearchResult, 
    handleShowDetails, handleResetDetails, data, ...props }) => {
    
    return (
        <div className={"wrapper"}>
            <div className={"searchWrapper"}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="searchbar">
                    <input type="text" value={searchValue} placeholder="Search for TV shows" onChange={(e) => handleSearchCategory(e)}/>
                    <button className="searchBtn" onClick={() => handleSearchResult()}>Search</button>
                </div>
                <Link style={{"color":"aliceblue"}} onClick={() => handleResetDetails()}>Reset</Link>
            </div>
            <div className={"moviesListWrap"}>
                <ul className="movieslist">
                    {data && data.length > 0 && data.map((item, index) => {
                            return (
                                <li>
                                    <Link>
                                        <div className="movieCard">
                                            <div className={"coverImage"}>
                                                { item.show.image?.original && 
                                                    <img src={item.show.image?.original} alt="" />
                                                }
                                            </div>
                                            <div className="moviedetails">
                                                <h5 className={"movieTitle"} onClick={() => handleShowDetails(item.show.id)}>{item.show.name}</h5>
                                                <RatingForm 
                                                    data={item.show.rating?.average}
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
        </div>
    )
    
}

SearchList.propTypes = {
	pending: PropTypes.bool
};

export default SearchList;
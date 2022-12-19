import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { details, search } from '../../ducks/gateway/search/actions';
import './main.scss'
import logo from '../../assets/img/logo.png';
import RatingForm from './RatingForm';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export class Details extends Component {
    constructor() {
        super();

        this.state = {
            searchDetails: false,
            searchValue:null,
        }

        this.handleSearchCategory = this.handleSearchCategory.bind(this);
        this.handleSearchResult = this.handleSearchResult.bind(this);
        this.handleShowDetails = this.handleShowDetails.bind(this);

    }

    componentDidMount() {
        if(this.props.location.state?.id){
            this.props.details(this.props.location.state.id);
        }
    }

    handleSearchCategory(e){
        this.setState({
            searchValue: e.target.value
        })
    }

    handleSearchResult(){
        this.props.search(this.state.searchValue);
        this.handleShowDetails();
    }

    handleShowDetails(){
        this.props.history.push({
            pathname: "/home",
        })
    }

    render() {
        
        const { showDetails } = this.props;

        return (
            <div className="wrapper">
                <div className={"searchWrapper"}>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="searchbar">
                        <input type="text" value={this.state.searchValue} placeholder="Search for TV shows" onChange={(e) => this.handleSearchCategory(e)}/>
                        <button className="searchBtn" onClick={() => this.handleSearchResult()}>Search</button>
                    </div>
                </div>
                <div className="movieDetails">
                    <div className={"backSection"}>
                        <Link onClick={() => this.handleShowDetails()}>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.02513 11.8891L3 11.864L9.36396 5.5L10.7782 6.91421L6.69239 11H21V13H6.91421L10.7782 16.864L9.36396 18.2782L3 11.9142L3.02513 11.8891Z" fill="white" />
                                </svg>
                            </span>
                            <span>Back to search results</span>
                        </Link>
                    </div>
                    { showDetails && 
                        <div className="detailsWrap">
                            <div className="left">
                                <div className="movieCard">
                                    <div className={"coverImage"}>
                                        <img src={showDetails.image?.original} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="movieTitlewrap">
                                    <h2 className='movieTitledetail'>{showDetails.name}</h2>
                                    <RatingForm data={showDetails.rating?.average}/>
                                    <div className='moviegenere'>
                                        <label>Genres: </label>
                                        <ul>
                                            { showDetails && showDetails.genres.map(
                                                (item, index) => index === 0 ?
                                                <>
                                                    <li>{item}</li>
                                                </>
                                                :
                                                <>
                                                    <li>|</li>
                                                    <li>{item}</li>
                                                </>
                                            )
                                            }
                                        </ul>
                                    </div>
                                    <div className='movieDescription'>
                                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={showDetails.summary} />
                                    </div>
                                </div>
                                <div className='castingDetails'>
                                    <h2 className='movieTitledetail'>Cast</h2>
                                    <ul className='castList'>
                                        {
                                            showDetails._embedded.cast.map((cast,index) => index < 6 &&
                                                <li>
                                                    <div className='castLeft'>
                                                        <div className='castAvatar'>
                                                            {cast.character.image?.original ?
                                                                <img src={cast.character.image?.original} alt="" />
                                                                :
                                                                <img src={cast.person.image?.original} alt="" />
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className='castRight'>
                                                        <h2 className="castName">{cast.person.name}</h2>
                                                        <small className="castrole">as <span>{cast.character.name}</span></small>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    debugger;
    const showDetails = state.user.details;
    const pending = state.user.pending;
    debugger;
    return {
        showDetails, pending
    };
}

export default withRouter(
    connect(mapStateToProps, {
        details, search
    })(Details)
);

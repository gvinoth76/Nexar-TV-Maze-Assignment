import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { search, reset } from '../../ducks/gateway/search/actions';
import './main.scss';
import SearchForm from './SearchForm';
import SearchList from './SearchLists';

export class Home extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            searchDetails: false,
            searchValue:null,
        }

        this.handleSearchCategory = this.handleSearchCategory.bind(this);
        this.handleSearchResult = this.handleSearchResult.bind(this);
        this.handleShowDetails = this.handleShowDetails.bind(this);
        this.handleResetDetails = this.handleResetDetails.bind(this);

    }

    componentDidMount() {
        
    }

    handleSearchCategory(e){
        this.setState({
            searchValue: e.target.value
        })
    }

    handleSearchResult(){
        this.props.search(this.state.searchValue);
    }

    handleShowDetails(id){
        this.props.history.push({
            pathname: "/details",
            state: {
                id
            }
        })
    }

    handleResetDetails(){
        this.props.reset();
    }

    render() {
        
        const { searchDetails } = this.state;

        const { searchData } = this.props;

        return (
            <>
                { searchData && searchData.length > 0 ?
                    <SearchList
                        searchDetails = {searchDetails}
                        handleSearchCategory = {this.handleSearchCategory}
                        handleSearchResult={this.handleSearchResult}
                        handleShowDetails={this.handleShowDetails}
                        handleResetDetails={this.handleResetDetails}
                        searchVaue={this.state.searchValue}
                        data={searchData}
                    />
                    :
                    <SearchForm
                        searchDetails = {searchDetails}
                        handleSearchCategory = {this.handleSearchCategory}
                        handleSearchResult={this.handleSearchResult}
                        searchVaue={this.state.searchValue}
                    />
                }
            </>
        )
    }

}

function mapStateToProps(state) {
    const searchData = state.user.search;
    const pending = state.user.pending;
    return {
        searchData, pending
    };
}

export default withRouter(
    connect(mapStateToProps, {
        search, reset
    })(Home)
);
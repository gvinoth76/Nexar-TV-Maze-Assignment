import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from '../components/Public/Home';
import Details from '../components/Public/Details';

export default class TVMazePublic extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        key="home"
                        path="/home"
                        exact={true}
                        component={Home}
                    />  
                    <Route
                        key="details"
                        path="/details"
                        exact={true}
                        component={Details}
                    />         
                </Switch>
            </div>
        )
    }
}
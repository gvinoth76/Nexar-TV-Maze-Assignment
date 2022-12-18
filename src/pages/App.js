import React, { Suspense, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './../../src/assets/logo/logo.svg';
import './App.css';
const TVMazePublic = React.lazy(() => import('./TVMazePublic'));

const App = ({}) => {
  return (
    <Suspense fallback={<div>Loading...</div>} >
        <Switch> 
          <Redirect from="/" to="/home" exact />
          <Route exact path="/(home|details)" name="public page" component={TVMazePublic} />
        </Switch>
    </Suspense>
  );
};

const mapStateToProps = (state) => (
 
	{ user: state.user, menu: state.menu }
);

export default connect(mapStateToProps, null)(App);

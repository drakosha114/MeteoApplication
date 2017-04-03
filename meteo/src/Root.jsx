import React, {Component} from 'react';
import {Router, Route, Redirect} from 'react-router';
import {isGeolocationSupported} from './utils/geolocationUtilites.js';
import {getCookie, isLocalStorageSupported, localStorageGetItem} from './utils/sessionUtilites.js';

import SessionStore from './stores/SessionStore.js';
import SessionAction from './actions/SessionActions.js';

import App from './App.js'
import StartLayout from './containers/startLayout.js';
import AppLayout from './containers/appLayout.js';



const isAuthorized = () => {

    const dataName = 'WEATHER_DATA';

    let data = isLocalStorageSupported()? localStorageGetItem(dataName) : getCookie(dataName);

    console.log(data);

    console.log('sadas');
};


function requireAuth (nextState, replace) {

    if (!SessionStore.isAuthorized()) {
        replace({
            pathname: '/start',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

isAuthorized();

class Root extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isGeolocationSupported: isGeolocationSupported()
        }

    };

    static PropTypes = {
        history: React.PropTypes.string.isRequired
    };

    static childContextTypes = {
        isGeolocationSupported: React.PropTypes.bool
    };

    getContextTypes () {
        return {
            isGeolocationSupported: this.state.isGeolocationSupported
        }
    }

    render () {

        const {history} = this.props;

        return (
            <Router history={history}>
                <Redirect from='/' to='/start' />
                <Route path={'/'} component={App}>
                    <Route path={'/start'} component={StartLayout}/>
                    <Route component={AppLayout} onEnter={requireAuth}/>
                </Route>
            </Router>
        )
    }
}

export default Root;
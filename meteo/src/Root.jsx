import React, {Component} from 'react';
import {Router, Route, Redirect} from 'react-router';

import App from './App.js'

import StartLayout from './containers/startLayout.js';
import AppLayout from './containers/appLayout.js';

const requireAuth = () => {
    return false;
};

class Root extends Component {

    constructor(props) {
        super(props);
    };

    static PropTypes = {
        history: React.PropTypes.string.isRequired
    };

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
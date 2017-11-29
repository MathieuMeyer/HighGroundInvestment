import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FeatherIcons from 'feather-icons';

import AccountsPage from './pages/AccountsPage';
import HomePage from './pages/HomePage';
import InvestPage from './pages/InvestPage';

class App extends Component {
    componentWillMount() {
        FeatherIcons.replace();
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                <Route path="/accounts" render={() => <AccountsPage />} />
                <Route path="/invest/account/:idTag" render={(router) => <InvestPage idTag={router.match.params.idTag} />} />
                <Redirect from='/disconnect' to='/'/>
            </Switch>
        );
    }
}

export default App;
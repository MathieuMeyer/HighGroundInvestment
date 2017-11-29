import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AccountsPage from './pages/AccountsPage';
import HomePage from './pages/HomePage';
import InvestPage from './pages/InvestPage';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts: [
                {
                    idTag: "7O8AIJ7O9JH7WSXH9J8W7HX9IJWSZX",
                    sold: 3000,
                    type: "check"
                },
                {
                    idTag: "GH7UD9G8HAUS7DGH89ASU7GD8HAS",
                    sold: 8000,
                    type: "investment"
                }
            ]
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                <Route path="/accounts" render={() => <AccountsPage accounts={this.state.accounts} />} />
                <Route path="/invest/account/:idTag" render={(router) => <InvestPage idTag={router.match.params.idTag} />} />
                <Redirect from='/disconnect' to='/'/>
            </Switch>
        );
    }
}

export default App;
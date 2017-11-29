import React, { Component } from 'react';
import axios from 'axios';
import config from '../config.json';

import ClientAccountsList from '../components/ClientAccountsList';
import Navigation from '../components/Navigation';

class AccountsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { accounts: [] }
        
        axios.get(config.apiUrl + 'clients/1/accounts')
            .then((response) => { this.setState({ accounts: response.data }); })
            .catch((error) => { console.log(error) });
    }

    render() {
        return (
            <div className="page-wrapper">
                <Navigation connected />
                <section>
                    <h2>Ma Synthese</h2>
                    <ClientAccountsList accounts={this.state.accounts} />
                </section>
            </div>
        );
    }
}

export default AccountsPage;
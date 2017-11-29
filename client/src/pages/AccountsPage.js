import React, { Component } from 'react';

import ClientAccountsList from '../components/ClientAccountsList';
import Navigation from '../components/Navigation';

class AccountsPage extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Navigation connected />
                <section>
                    <h2>Ma Synthese</h2>
                    <ClientAccountsList accounts={this.props.accounts} />
                </section>
            </div>
        );
    }
}

export default AccountsPage;
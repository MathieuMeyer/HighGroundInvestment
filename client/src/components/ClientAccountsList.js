import React, { Component } from 'react';

import ClientAccount from './ClientAccount';

class ClientAccountsList extends Component {
    render() {
        return (
            <ul className="account-list">
                {this.props.accounts.map((account) => {
                    return (<ClientAccount key={account.number} account={account} />);
                })}
            </ul>
        );
    }
}

export default ClientAccountsList;
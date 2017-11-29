import React, { Component } from 'react';

import CompanyDetails from '../components/CompanyDetails';
import ClientStatus from '../components/ClientStatus';
import Investments from '../components/Investments';
import Navigation from '../components/Navigation';

class AccountsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: {
                idTag: "7O8AIJ7O9JH7WSXH9J8W7HX9IJWSZX",
                sold: 8000,
                type: "check",
                investments: [
                    { "sum": 2000 },
                    { "sum": 4000 }
                ]
            },
            totalInvested: 0
        }
        this.state.totalInvested = this.state.account.investments.reduce((a, b) => { return a.sum + b.sum });
    }

    render() {
        return (
            <div className="page-wrapper">
                <Navigation connected />
                <section>
                    <h2>Compte {this.props.idTag}</h2>
                    <ClientStatus totalInvested={this.state.totalInvested} sold={this.state.account.sold}></ClientStatus>
                    <CompanyDetails name="MaSuperEntreprise" sector="Energie" localization="Arras" category="Zone sûre" description="Ceci est une description"></CompanyDetails>
                    <Investments toInvestGlobal={10}></Investments>
                </section>
            </div>
        );
    }
}

export default AccountsPage;
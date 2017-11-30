import axios from 'axios';
import config from '../config.json';
import React, { Component } from 'react';

import CompanyList from '../components/CompanyList';
import ClientStatus from '../components/ClientStatus';
import Investments from '../components/Investments';
import Navigation from '../components/Navigation';

class AccountsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: undefined,
            companies: [],
            totalInvested: 0
        }
        
        axios.get(config.apiUrl + 'accounts?filter[where][idTag]=' + this.props.idTag + '&filter[include][investments]')
            .then((response) => {
                this.setState({ account: response.data[0] });
                this.setState({ totalInvested: this.state.account.investments.length > 1 ? this.state.account.investments.reduce((a, b) => { return a + b.sum }, 0) : this.state.account.investments[0].sum });

                console.log(this.state.account);
                console.log(response.data[0].investments.reduce((result, investment) => { return result + investment.sum }));
            })
            .catch((error) => { console.log(error); });

        axios.get(config.apiUrl + '/enterprises')
            .then((response) => { this.setState({ companies: response.data }); })
            .catch((error) => { console.log(error); });
    }

    render() {
        return (
            <div className="page-wrapper">
                <Navigation connected />
                <section>
                    <h2>Compte {this.props.idTag}</h2>
                    { this.state.account === undefined && "Loading..." }
                    { this.state.account !== undefined && [
                        <ClientStatus totalInvested={this.state.totalInvested} sold={this.state.account.sold} />,
                        <Investments toInvestGlobal={10}></Investments>
                    ] }

                    { this.state.companies.length === 0 && "Loading..." }
                    { this.state.companies.length > 0 && 
                        <CompanyList companies={this.state.companies} />
                    }
                </section>
            </div>
        );
    }
}

export default AccountsPage;
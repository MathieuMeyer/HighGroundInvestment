import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import CompanyDetails from './components/CompanyDetails';
import ClientStatus from './components/ClientStatus';
import Investments from './components/Investments';
import Navigation from './components/Navigation';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            investedGlobal: 0 ,
            toInvestGlobal: 50000
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Navigation />
                </Route>
                <Route path="/accounts">
                    <div>
                        <Navigation connected />
                        <CompanyDetails name="MaSuperEntreprise" sector="Energie" localization="Arras" category="Zone sûre" description="Ceci est une description"></CompanyDetails>
                        <ClientStatus investedGlobal={this.state.investedGlobal} toInvestGlobal={this.state.toInvestGlobal}></ClientStatus>
                        <Investments toInvestGlobal={this.state.toInvestGlobal}></Investments>
                    </div>
                </Route>
                <Redirect from='/disconnect' to='/'/>
            </Switch>
        );
    }
}

export default App;
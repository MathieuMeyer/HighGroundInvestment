import React, { Component } from 'react';

class ClientStatus extends Component {
    savingsHandler() { }

    render() {
        return (
            <div>
                <div className="ClientStatusInvestedMoney">
                    Reste à investir: {this.props.toInvestGlobal}€
                    Argent investi: {this.props.investedGlobal}€
                </div>
                <div className="ClientStatusAddNewMoney">
                    <label>Ajouter argent à investir</label>
                    <input></input>
                    <button onClick={this.savingsHandler}>Ajouter à l'épargne</button>
                </div>
            </div>
        );
    }
}

export default ClientStatus;
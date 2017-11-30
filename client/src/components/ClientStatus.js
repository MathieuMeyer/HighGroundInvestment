import React, { Component } from 'react';
import formatCurrency from 'format-currency';

class ClientStatus extends Component {
    savingsHandler() { }

    render() {
        let formatOptions = { format: '%v %s', symbol: '€', locale: 'fr-FR' }
        let investedPercent = this.props.totalInvested / this.props.sold * 100;

        return ([
            <div className="titles">
                <div className="labels">
                    Total
                    <div className="left-title">Investi</div>
                    <div className="right-title">Disponible</div>
                </div>
                <div className="values">
                    { formatCurrency(this.props.sold, formatOptions) }
                    <div className="left-value">{ formatCurrency((this.props.totalInvested), formatOptions) }</div>
                    <div className="right-value">{ formatCurrency(this.props.sold - this.props.totalInvested, formatOptions) }</div>
                </div>
            </div>,
            <div className="account-status">
                <div className="progress invested" style={{ width: investedPercent.toString() + '%' }}></div>
            </div>,
            <div className="ClientStatusAddNewMoney">
                <label>Ajouter argent à investir</label>
                <input></input>
                <button onClick={this.savingsHandler}>Ajouter à l'épargne</button>
            </div>
        ]);
    }
}

export default ClientStatus;
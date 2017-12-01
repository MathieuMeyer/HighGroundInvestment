import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from 'format-currency';

class ClientAccount extends Component {
    render() {
        let formatOptions = { format: '%v %s', symbol: '€', locale: 'fr-FR' }
        
        return (
            <div className="account">
                <div className="details">
                    <div className="info">
                        <div><label>Compte</label><span># {this.props.account.idTag}</span></div>
                        <div><label>Type</label><span>{this.props.account.type}</span></div>
                    </div>
                    <div className="sold">
                        <label>Solde</label>
                        { formatCurrency(this.props.account.sold, formatOptions) }
                    </div>
                </div>

                { this.props.account.type === "investment" && 
                    <div className="invest">
                        <Link to={"/invest/account/" + this.props.account.idTag}><i data-feather="trending-up"></i> Investir</Link>
                    </div>
                }
            </div>
        );
    }
}

export default ClientAccount;
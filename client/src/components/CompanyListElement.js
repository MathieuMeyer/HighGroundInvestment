import React, { Component } from 'react';
import formatCurrency from 'format-currency';
import config from '../config.json';
import axios from 'axios';

import StockGraph from './StockGraph';

class CompanyListElement extends Component {
    constructor(props) {
        super(props);

        this.state = { sum: 0 }
    }

    confirmInvestment(event) {
        axios.post(config.apiUrl + '/Investment', {
            sum: this.state.sum,
            accountId: this.props.account,
            enterpriseId: this.props.company.id
          })
        .then((response) => { })
        .catch((error) => { console.log(error); });
    }

    changeHandler(event) {
        this.setState({ sum: event.target.value });
    }

    render() {
        let formatOptions = { format: '%v %s', symbol: '€', locale: 'fr-FR' }

        return (
            <div className="company">
                <div className="presentation">
                    <label className="company-name">{this.props.company.name}<span className="invested">( Investi: { formatCurrency(this.props.somme, formatOptions) } )</span></label> 
                    <label className="company-activity">{this.props.company.activity}</label>
                    <p className="company-description">{this.props.company.description}</p>
                </div>
                <div className="investmentConfirmation">
                    <label>Combien souhaitez-vous investir ?</label>
                    <input name="investment" type="number" onChange={(event) => { this.changeHandler(event) }} />
                    <button onClick={(event) => { this.confirmInvestment(event) }}></button>
                </div>
                <StockGraph symbol={this.props.company.symbol} />
            </div>
        );
    }
}

export default CompanyListElement;
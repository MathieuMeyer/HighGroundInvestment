import React, { Component } from 'react';
import formatCurrency from 'format-currency';

import StockGraph from './StockGraph';

class CompanyListElement extends Component {
    confirmInvestment() { }

    render() {
        let formatOptions = { format: '%v %s', symbol: '€', locale: 'fr-FR' }

        return (
            <div className="company">
                <div className="presentation">
                    <label className="company-name">{this.props.company.name}<span className="invested">( Investi: { formatCurrency(this.props.somme, formatOptions) } )</span></label> 
                    <label className="company-activity">{this.props.company.activity}</label>
                    <p className="company-description">{this.props.company.description}</p>
                </div>
                <StockGraph symbol={this.props.company.symbol} />
            </div>
        );
    }
}

export default CompanyListElement;
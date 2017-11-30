import React, { Component } from 'react';

import StockGraph from './StockGraph';

class CompanyListElement extends Component {
    confirmInvestment() { }

    render() {
        return (
            <div className="company">
                <div className="presentation">
                    <label className="company-name">{this.props.company.name}</label> 
                    <label className="company-activity">{this.props.company.activity}</label>
                    <label>{this.props.somme}</label>
                    <p className="company-activity">{this.props.company.description}</p>
                </div>
                <StockGraph symbol={this.props.company.symbol} />
            </div>
        );
    }
}

export default CompanyListElement;
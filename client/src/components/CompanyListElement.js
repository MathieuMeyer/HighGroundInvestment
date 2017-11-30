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
                </div>
                <StockGraph symbol={this.props.company.symbol} />
            </div>
        );
    }
}

export default CompanyListElement;
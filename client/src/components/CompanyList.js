import React, { Component } from 'react';

import CompanyListElement from './CompanyListElement';

class CompanyList extends Component {
    render() {
        return (
            <div className="company-list">
                {this.props.companies.map((company) => {
                    return (<CompanyListElement key={company.symbol} company={company} />);
                })}
            </div>
        );
    }
}

export default CompanyList;
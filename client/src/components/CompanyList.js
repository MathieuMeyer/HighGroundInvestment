import React, { Component } from 'react';

import CompanyListElement from './CompanyListElement';

class CompanyList extends Component {
    render() {
        return (
            <div className="company-list">
                {this.props.companies.map((company) => {
                    var somme = 0;
                    {this.props.investments.map((investment) => {
                        if (investment["enterpriseId"] == company.id){
                            somme += investment.sum;
                        }
                    })}
                    if(somme > 0){ 
                        return (<CompanyListElement key={company.symbol} company={company} somme={somme} />);
                    }
                })}
            </div>
        );
    }
}

export default CompanyList;
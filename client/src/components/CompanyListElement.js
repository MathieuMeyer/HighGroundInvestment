import React, { Component } from 'react';

class CompanyListElement extends Component {
    confirmInvestment() { }

    render() {
        return (
            <div className="company">
                <div className="presentation">
                    <label className="company-name">{this.props.company.name}</label> 
                    <label className="company-activity">{this.props.company.activity}</label>
                </div>
                <div className="companyListInvestment">
                    <p>Argent déjà investi: {this.props.investedCompany}</p>
                    <label>Combien voulez-vous investir ?</label>
                    <input className="companyListSlider" type="range" min="0" max={this.props.toInvestGlobal} value="0"></input>
                    <button onClick={this.props.confirmInvestment}>Investir</button>
                </div>
            </div>
        );
    }
}

export default CompanyListElement;
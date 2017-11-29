import React, { Component } from 'react';

class CompanyListElement extends Component {
    confirmInvestment() { }

    render() {
        return (
            <div>
                <div className="companyListPresentation">
                    <p>Nom: {this.props.name}</p> 
                    <p>Catégorie: {this.props.category}</p>
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
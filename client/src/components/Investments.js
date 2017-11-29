import React, { Component } from 'react';
import CompanyListElement from './CompanyListElement';

class Investments extends Component {
    showInvestedCompanies() { }

    showNonInvestedCompanies() { }

    render() {
        return (
            <div>
                <div className="InvestmentsCompanySelection">
                    <button onClick={this.showInvestedCompanies}>Montrer investissements déjà réalisés</button>
                    <button onClick={this.showNonInvestedCompanies}>Choisir de nouveau investissements</button>
                    <select name="sorting">
                        <option value="">Secteur</option>
                        <option value="">Localisation</option>
                    </select>
                </div>
                <div className="InvestmentsCompanyList">
                    <CompanyListElement name="MaSuperEntreprise" category="Zone sûre" investedCompany="1000"></CompanyListElement>
                </div>
            </div>
        );
    }
}

export default Investments;
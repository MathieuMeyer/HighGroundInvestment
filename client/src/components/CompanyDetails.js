import React, { Component } from 'react';

class CompanyDetails extends Component {
    render() {
        return (
            <div>
                <div className="CompanyDetailsMainInfos">
                    <p>Nom: {this.props.name}</p>
                    <p>Secteur: {this.props.sector}</p>
                    <p>Localisation: {this.props.localization}</p>
                    <p>Catégorie: {this.props.category}</p>
                </div>
                <div className="CompanyDetailsDescription">
                    <p>Description: {this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default CompanyDetails;
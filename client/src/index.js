import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';

class App extends React.Component {
  state = {
    investedGlobal: 0 ,
    toInvestGlobal: 50000,
  }
  render() {
    return (
      <div>
        <CompanyDetails name="MaSuperEntreprise" sector="Energie" localization="Arras" category="Zone sûre" description="Ceci est une description"></CompanyDetails>
        <ClientStatus investedGlobal={this.state.investedGlobal} toInvestGlobal={this.state.toInvestGlobal}></ClientStatus>
        <Investments toInvestGlobal={this.state.toInvestGlobal}></Investments>
      </div>
    );
  }
}
class CompanyDetails extends React.Component {
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
class ClientStatus extends React.Component {
  savingsHandler = () =>{
  }
  render() {
    return (
      <div>
        <div className="ClientStatusInvestedMoney">
          Reste à investir: {this.props.toInvestGlobal}€
          Argent investi: {this.props.investedGlobal}€
        </div>
        <div className="ClientStatusAddNewMoney">
          <label>Ajouter argent à investir</label>
          <input></input>
          <button onClick={this.savingsHandler}>Ajouter à l'épargne</button>
        </div>
      </div>
    );
  }
}

class Investments extends React.Component {
  showInvestedCompanies = () =>{
  }
  showNonInvestedCompanies = () =>{
  }
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

class CompanyListElement extends React.Component {
  confirmInvestment = () =>{
  }
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


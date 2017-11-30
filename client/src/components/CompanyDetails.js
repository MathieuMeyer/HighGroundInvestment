import React, { Component } from 'react';
import axios from 'axios';
import ChartistGraph from 'react-chartist';
  
class CompanyDetails extends Component {
    constructor(props) {
        super(props);
        
        /*switchNameHandler = () => {
            
        };*/
    
    }
    render() {
        console.log("test");
        axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=YEIGHQ3523QIVB95')
        .then((response) => {
            var result = [];
            /*Array.from(response).forEach(function (child) {
                console.log("test");
                console.log(child);
            });*/
            console.log("000000");
            console.log(Object.keys(response.data["Weekly Time Series"]).length);
            var lenght = Object.keys(response.data["Weekly Time Series"]).length;
            for (var i = 0; i < lenght; i++) {
                console.log(response.data["Weekly Time Series"][i]);
            }
            console.log("000000");

            /*for (var i = 0, len = arr.length; i < len; i++) {
                someFn(arr[i]);
              }
            Object.values(response.data["Weekly Time Series"]).forEach(function(element){
                console.log("test");
                console.log(element);
            });*/
        })
        .catch((error) => { console.log(error) });
        var lineChartData = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [0, 0, 25, 0, 5, 3, 5, 4]
            ]
        }
        var lineChartOptions = {
            low: 0,
            showArea: true
        }
        return (
            <div>
                <ChartistGraph data={lineChartData} options={lineChartOptions} type={'Line'} />
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
import axios from 'axios';
import config from '../config.json';
import React, { Component } from 'react';

import ChartistGraph from 'react-chartist';
import 'chartist/dist/chartist.min.css';

class StockGraph extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            graphData: {
                labels: [],
                series: [[]]
            }
        }

        axios.get(config.apiUrl + 'enterprises/' + this.props.symbol + '/shares')
            .then((response) => {
                var labels = [];
                var series = [[]];
                var stocks = response.data.stocks["Time Series (Daily)"];
                console.log(response);
                
                Object.keys(stocks).forEach((day) => {
                    labels.push(day);
                    series[0].push((parseFloat(stocks[day]["2. high"]) + parseFloat(stocks[day]["3. low"])) / 2);
                });
                labels.reverse();
                series[0].reverse();


                this.setState({ graphData: { labels: labels, series: series } });
            })
            .catch((error) => { console.log(error) });
    }
    
    render() {
        let options = {
            low: 0,
            showArea: true,
            height: '400px',
            axisX: {
                labelInterpolationFnc: function skipLabels(value, index) {
                    return index % 7 === 0 ? value : null;
                }
            }
        }

        return (
            <ChartistGraph data={this.state.graphData} options={options} type="Line" />
        );
    }
}

export default StockGraph;
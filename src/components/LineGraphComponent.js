import React, {Component} from 'react';
import './linegraph.scss';

import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri';
import Chart from 'chart.js';

export default class LineGraphComponent extends Component{

    componentDidMount(){
        let {data } = this.props;
        this.drawLine(data.id - 1);
    }

    drawLine(id){  
        let context = null; 
        let {data} = this.props;
        var canvas = document.getElementsByClassName( "data__canvas")[id];  
        if(canvas !== null){
            context = canvas.getContext("2d");
            var myChart = new Chart(context, {
                type: 'line',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Orange'],
                    datasets: [{
                        label: 'My First Dataset',
                        data: data.data,
                        backgroundColor: data.color,
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                      }]
                },
                options: {
                    elements: {
                        point:{
                            radius: 0
                        }
                    },
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                tickMarkLength: false,
                            },
                            ticks: {
                                display: false
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                tickMarkLength: false,
                            },
                            ticks: {
                                display: false
                            },
                        }]
                    }
                }
            })
        }
    }

    render(){
        let {data} = this.props;
        return (
            <li className="data data--size data--theme" id="data">
                <canvas className="data__canvas" />
                <div className="data__info">
                    <h4 className="data__name">{data.name}</h4>
                    <h1 className="data__count">{data.count}</h1>
                    {data.percentage >= 0 && 
                        <div className="data__row data__up">
                            <RiArrowUpSFill className="data__icon"/>
                            <span className="data__percentage">{data.percentage}</span>
                        </div>
                    }
                    {data.percentage < 0 && 
                        <div className="data__row data__down">
                            <RiArrowDownSFill className="data__icon"/>
                            <span className="data__percentage">{data.percentage}</span>
                        </div>
                    }
                </div>
        </li>
        )
    }
}
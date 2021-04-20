import React, {Component} from 'react';
import './blogdashboard.scss';

import LineGraphComponent from '../components/LineGraphComponent';
import PieComponent from '../components/PieComponent';

import Chart from 'chart.js';

export default class BlogDashboardPage extends Component{
    
    constructor(){
        super();
        this.state = {
           dataList: [
            {
                id: 1,
                name: 'POSTS',
                count: '2,390',
                data: [0, 40, 30, 31, 50, 35, 10],
                percentage: 4.6,
                color: '#F1FAFC',
            },
            {
                id: 2,
                name: 'PAGES',
                count: '390',
                data: [20, 10, 30, 41, 50, 45, 40],
                percentage: 1.3,
                color: '#F1FAFC',
            },
            {
                id: 3,
                name: 'COMMENTS',
                count: '8,390',
                data: [10, 40, 40, 41, 50, 15, 10],
                percentage: -2.3,
                color: '#FFF5F7'
            },
            {
                id: 4,
                name: 'USERS',
                count: '2,190',
                data: [10, 40, 30, 1, 50, 55, 40],
                percentage: 4.7,
                color: '#F1FAFC',
            },
            {
                id: 5,
                name: 'SUBSCRIBERS',
                count: '12,190',
                data: [0, 40, 30, 31, 50, 32, 40],
                percentage: -4.7,
                color: '#FEFAF1',
            }
           ]
        }
    }

    componentDidMount(){
        this.renderUsesrGraph();
    }

    renderUsesrGraph(){
        var canvas = document.getElementById( "users__canvas");  
        if(canvas !== null){
            let context = canvas.getContext("2d");
            var myChart = new Chart(context, {
                type: 'line',
                data: {
                    labels: [10, "", 20, "", 30, "", 40, "", 50, "", 60, "", 70],
                    datasets: [
                    {
                        label: 'Current Month',
                        data: [400, 500, 100, 1500, 200, 200, 500, 800, 400, 500, 200, 400, 1000],
                        backgroundColor: '#E5F1FF',
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 2
                    },
                    {
                        label: 'Past Month',
                        data: [400, 500, 1000, 1500, 200, 2500, 500, 300, 4000, 2000, 200, 400, 3000],
                        backgroundColor: '#E5DFF2',
                        borderColor: 'rgb(75, 192, 192)',
                        borderDash: [5,5],
                        borderWidth: 2
                    },
                ]
                },
                options: {
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    hover: {
                        mode: 'point'
                    },
                    elements: {
                        point:{
                            radius: 0
                        }
                    },
                }
            })
        }
    }

    renderLineGraphs(list){
        return list.map(data => (
            <LineGraphComponent data={data} key={data.id}/>
        ))
    }

    render(){
        let {category, title} = this.props;
        let {dataList} = this.state;
        return (
            <div className="
                container 
                container--size 
                container--theme">
                
                {category && <h5 className="container__category">{category}</h5>}
                {title && <h1 className="container__title">{title}</h1>}

                <ul className="container__graphs">
                    {this.renderLineGraphs(dataList)}
                </ul>
                <div className="users">
                    <div className="users__header">
                        <h3 className="users__title">Users</h3>
                    </div>
                    <div className="users__box">
                        
                    </div>
                    <canvas id="users__canvas"></canvas>
                </div>
                <PieComponent />
            </div>
        )
    }
}
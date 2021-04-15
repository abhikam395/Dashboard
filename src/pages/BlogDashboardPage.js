import React, {Component} from 'react';
import './blogdashboard.scss';

import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri';

const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: datapoints,
      borderColor: 'red',
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }, {
      label: 'Cubic interpolation',
      data: datapoints,
      borderColor: 'blue',
      fill: false,
      tension: 0.4
    }, {
      label: 'Linear interpolation (default)',
      data: datapoints,
      borderColor: 'green',
      fill: false
    }
  ]
};

export default class BlogDashboardPage extends Component{
    
    constructor(){
        super();
        this.state = {
            data: {
                id: 1,
                name: 'POSTS',
                count: '2,390',
                percentage: '4.7%'
            }
        }
    }

    componentDidMount(){
        var canvas = document.querySelector( ".data__canvas");  
        var context = canvas.getContext( "2d" );
        
        // declare graph start and end  
        var GRAPH_TOP = 100;  
        var GRAPH_BOTTOM = 375;  
        var GRAPH_LEFT = 0;  
        var GRAPH_RIGHT = 630;   
        
        var GRAPH_HEIGHT = 350;   
        var GRAPH_WIDTH = 450;  

        // declare test data set and get length   
        var dataArr = [ 6, 8, 10, 12, 11, 7, 5, 8 ];  
        var arrayLen = dataArr.length;
        // calculate largest piece of data  
        
        var largest = 0;  
        for( var i = 0; i < arrayLen; i++ ){  
            if( dataArr[ i ] > largest ){  
                largest = dataArr[ i ];  
            }  
        }  

        context.beginPath();   
        // make your graph look less jagged  
        context.lineJoin = "round";  
        context.strokeStyle = "#1987FF";   
        context.lineWidth = 4;
        context.fillStyle = "#F2FBFD";
        // add first point in the graph  
        context.moveTo(GRAPH_LEFT, 460 );   
        // loop over data and add points starting from the 2nd index in the array as the first has been added already  
        for( var i = 1; i < arrayLen; i++ ){  
            context.lineTo( GRAPH_RIGHT / arrayLen * i + GRAPH_LEFT, ( GRAPH_HEIGHT - dataArr[ i ] / largest * GRAPH_HEIGHT ) + GRAPH_TOP );  
        }
        context.fill();
        // actually draw the graph  
        context.stroke();
    }

    render(){
        let {category, title} = this.props;
        let {data} = this.state;
        return (
            <div className="
                container 
                container--size 
                container--theme">
                
                {category && <h5 className="container__category">{category}</h5>}
                {title && <h1 className="container__title">{title}</h1>}

                <div className="container__row">
                    <div className="data data--size data--theme">
                        <h4 className="data__name">{data.name}</h4>
                        <h1 className="data__count">{data.count}</h1>
                        <div className="data__row">
                            <RiArrowUpSFill className="data__icon"/>
                            <span className="data__percentage">{data.percentage}</span>
                        </div>
                        <canvas className="data__canvas" id="canvas" width="550" height="450"></canvas>
                    </div>
                    <div className="data data--size data--theme">
                        <h4 className="data__name">{data.name}</h4>
                        <h1 className="data__count">{data.count}</h1>
                        <div className="data__row">
                            <RiArrowUpSFill className="data__icon"/>
                            <span className="data__percentage">{data.percentage}</span>
                        </div>
                        <canvas className="data__canvas" id="canvas" width="550" height="450"></canvas>
                    </div>
                    <div className="data data--size data--theme">
                        <h4 className="data__name">{data.name}</h4>
                        <h1 className="data__count">{data.count}</h1>
                        <div className="data__row">
                            <RiArrowUpSFill className="data__icon"/>
                            <span className="data__percentage">{data.percentage}</span>
                        </div>
                        <canvas className="data__canvas" id="canvas" width="550" height="450"></canvas>
                    </div>
                    <div className="data data--size data--theme">
                        <h4 className="data__name">{data.name}</h4>
                        <h1 className="data__count">{data.count}</h1>
                        <div className="data__row">
                            <RiArrowUpSFill className="data__icon"/>
                            <span className="data__percentage">{data.percentage}</span>
                        </div>
                        <canvas className="data__canvas" id="canvas" width="550" height="450"></canvas>
                    </div>
                    <div className="data data--size data--theme">
                        <h4 className="data__name">{data.name}</h4>
                        <h1 className="data__count">{data.count}</h1>
                        <div className="data__row">
                            <RiArrowUpSFill className="data__icon"/>
                            <span className="data__percentage">{data.percentage}</span>
                        </div>
                        <canvas className="data__canvas" id="canvas" width="550" height="450"></canvas>
                    </div>
                    <div className="data data--size data--theme">
                        <h4 className="data__name">{data.name}</h4>
                        <h1 className="data__count">{data.count}</h1>
                        <div className="data__row">
                            <RiArrowUpSFill className="data__icon"/>
                            <span className="data__percentage">{data.percentage}</span>
                        </div>
                        <canvas className="data__canvas" id="canvas" width="550" height="450"></canvas>
                    </div>
                </div>

            </div>
        )
    }
}
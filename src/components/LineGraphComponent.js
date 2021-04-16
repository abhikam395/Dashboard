import React, {Component} from 'react';
import './linegraph.scss';

import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri';

export default class LineGraphComponent extends Component{

    componentDidMount(){
        let {data } = this.props;
        this.drawLine(data.id - 1)
    }

    drawLine(id){   
        let {data} = this.props;
        var canvas = document.getElementsByClassName( "data__canvas")[id];  
        var context = canvas.getContext( "2d" );
        
        // declare graph start and end  
        var GRAPH_TOP = 100;  
        var GRAPH_LEFT = 0;  
        var GRAPH_RIGHT = 630;   
        
        var GRAPH_HEIGHT = 350;

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
        context.strokeStyle = data.percentage > 0 ? "#1987FF" : 'red'   
        context.lineWidth = 6;
        context.fillStyle = "#F2FBFD";
        // add first point in the graph  
        context.moveTo(GRAPH_LEFT, 460 );   
        // loop over data and add points starting from the 2nd index in the array as the first has been added already  
        for( var i = 1; i < arrayLen; i++ ){  
            context.lineTo( GRAPH_RIGHT / arrayLen * i + GRAPH_LEFT, ( GRAPH_HEIGHT - dataArr[ i ] / largest * GRAPH_HEIGHT ) + GRAPH_TOP );  
        }
        // context.fill();
        // actually draw the graph  
        context.stroke();
    }

    render(){
        let {data} = this.props;
        return (
            <li className="data data--size data--theme" id="data">
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
                <canvas className="data__canvas" id="canvas" width="550" height="450"></canvas>
        </li>
        )
    }
}
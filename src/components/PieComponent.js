import React, {Component} from 'react';
import './pie.scss';

export default class PieComponent extends Component{
    render(){
        return (
            <canvas className="pie" height="500px" width="400px" id="pie"></canvas>
        )
    }
}
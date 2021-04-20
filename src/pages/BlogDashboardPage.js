import React, {Component} from 'react';
import './blogdashboard.scss';

import LineGraphComponent from '../components/LineGraphComponent';
import PieComponent from '../components/PieComponent';

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
                <PieComponent />
            </div>
        )
    }
}
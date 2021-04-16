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
                percentage: 4.6
            },
            {
                id: 2,
                name: 'PAGES',
                count: '390',
                percentage: 1.3
            },
            {
                id: 3,
                name: 'COMMENTS',
                count: '8,390',
                percentage: -2.3
            },
            {
                id: 4,
                name: 'USERS',
                count: '2,190',
                percentage: 4.7
            },
            {
                id: 5,
                name: 'SUBSCRIBERS',
                count: '12,190',
                percentage: -4.7
            }
           ]
        }
    }

    renderLineGraphs(list){
        return list.map(data => (
            <LineGraphComponent data={data}/>
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
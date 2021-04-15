import React, {Component} from 'react';
import './blogdashboard.scss';

export default class BlogDashboardPage extends Component{

    componentDidMount(){
        let {category, title} = this.props;
        console.log(category)
    }

    render(){
        return (
            <div>BlogDashboardPage</div>
        )
    }
}
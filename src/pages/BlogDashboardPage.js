import React, {Component} from 'react';
import './blogdashboard.scss';

export default class BlogDashboardPage extends Component{

    componentDidMount(){

    }

    render(){
        let {category, title} = this.props;
        return (
            <div className="
                container 
                container--size 
                container--theme">
                
                {category && <h5 className="container__category">{category}</h5>}
                {title && <h1 className="container__title">{title}</h1>}

            </div>
        )
    }
}
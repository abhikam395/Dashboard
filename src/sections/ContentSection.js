import React, {Component} from 'react';
import './content.scss';

import { Bar } from 'react-chartjs-2';
import Router from '../helpers/router';

var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul"],
    datasets: [{
       label: "My First dataset",
       backgroundColor: "rgba(220,220,220,0.8)",
       borderColor: "rgba(220,220,220,0.8)",
       hoverBackgroundColor: "rgba(220,220,220,0.75)",
       hoverBorderColor: "rgba(220,220,220,1)",
       data: [65, 59, 80, 81, 56, 55, 40]
    }]
 };

export default class ContentSection extends Component{

    constructor(){
        super();
        this.state = {
            lists: [
                {id: 1, name:'POSTS', count: '2,390', percentage: '4.7%'},
                {id: 2, name:'PAGES', count: '182', percentage: '12.4%'},
                {id: 3, name:'COMMENTS', count: '8,147', percentage: '3.8%'},
                {id: 4, name:'USERS', count: '2,413', percentage: '12.4%'},
                {id: 5, name:'SUBSCRIBERS', count: '17,281', percentage: '2.4%'},
            ]
        }
    }

    renderList(list){
        return list.map(item => {
            return (
                <li 
                    key={item.id}
                    className="
                        contentsection__item 
                        contentsection__item--size 
                        contentsection__item--theme">
                        {item.name}
                       
                </li>
            )
        })
    }

    render(){
        let {lists} = this.state;
        return (
            // <section className="
            //     contentsection 
            //     contentsection--size 
            //     contentsection--theme">
                
            //     <h5 className="contentsection__subtitle">DASHBOARD</h5>
            //     <h1 className="contentsection__title">Blog Overview</h1>
            //     {/* <ul className="contentsection__list contentsection__list--size">
            //         {this.renderList(lists)}
            //     </ul> */}
            //     <Bar
            //         data={data}
            //         width={100}
            //         height={50}
            //         options={{ maintainAspectRatio: true }}
            //         />
            // </section>
            <Router />
        )
    }
}
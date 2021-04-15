import React, {Component} from 'react';
import './content.scss';
import Router from './../helpers/router';

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

    render(){
        return <Router />
    }
}
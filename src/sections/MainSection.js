import React, {Component} from 'react';
import './main.scss';

import NavbarComponent from './../components/NavbarComponent';
import Router from './../helpers/router';

export default class MainSection extends Component{
    render(){
        return(
            <aside className="
                mainsection 
                mainsection--size 
                mainsection--theme">
                <NavbarComponent />
                <Router />
            </aside>
        )
    }
}
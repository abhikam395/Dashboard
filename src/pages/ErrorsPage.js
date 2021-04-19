import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './errorspage.scss';

import {MdKeyboardBackspace} from 'react-icons/md';

export default class ErrorsPage extends Component{
    render(){
        let {category, title} = this.props;
        return (
            <div className="
                container 
                container--size 
                container--theme">
                
                <div className="error__container">
                    <h1 className="error__code">500</h1>
                    <h4 className="error__message">Something went wrong!</h4>
                    <p className="error__description">There was a problem of our end. Please try again later.</p>

                    <Link to="/#" className="error__button">
                        <MdKeyboardBackspace className="error__icon"/>
                        Go Back
                        </Link>
                </div>
            </div>
        )
    }
}
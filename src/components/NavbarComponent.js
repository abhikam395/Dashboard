import React,{Component} from 'react';
import './navbar.scss';

import {BiSearch} from 'react-icons/bi'
import {IoMdNotifications} from 'react-icons/io';
import {MdArrowDropDown} from 'react-icons/md';

export default class NavbarComponent extends Component{
    render(){
        return(
            <nav className="navbar navbar--size navbar--theme">
                <BiSearch className="navbar__search-icon"/>
                <input className="navbar__input" placeholder="Search for something..." />
                <a href="/#" className="navbar__notification">
                    <IoMdNotifications className="navbar__notification-icon"/>
                </a>
                <div className="navbar__profile">
                    <a href="/#" className="navbar__image-link">
                        <img 
                            className="navbar__image" 
                            alt="imag"
                            src="https://s0.linkimage.com/images/037/37335/normal_16834.jpg"/>
                    </a>
                </div>
                <span className="navbar__name">Nikita</span>
                <MdArrowDropDown className="navbar__drop-icon"/>
            </nav>
        )
    }
}
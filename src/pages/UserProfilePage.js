import React, {Component} from 'react';
import './userprofilepage.scss';

import {FaUserPlus} from 'react-icons/fa';

const imageUrl = "https://i.pinimg.com/564x/6f/de/85/6fde85b86c86526af5e99ce85f57432e.jpg";

export default class UserProfilePage extends Component{
    render(){
        let {category, title} = this.props;
        return (
            <div className="
                container 
                container--size 
                container--theme">
                
                {category && <h5 className="container__category">{category}</h5>}
                {title && <h1 className="container__title">{title}</h1>}

                <div className="userprofile__container userprofile__container--size">
                    <div className="
                        userprofile__card 
                        userprofile__card--size 
                        userprofile__card--theme">

                        <div className="userprofile__card-top">
                            <img 
                                className="userprofile__card-image" 
                                alt="avtaar" 
                                src={imageUrl}
                            />

                            <h2 className="userprofile__card-name">Sierra Brooks</h2>
                            <span className="userprofile__card-role">Project Manager</span>
                            <button className="userprofile__card-button">
                                <FaUserPlus />
                                <span className="userprofile__card-icon">Follow</span>
                            </button>
                        </div>
                        <div className="userprofile__card-workload">
                            <h5 className="userprofile__card-subtitle">Workload</h5>
                            <div className="userprofile__card-progress"></div>
                        </div>
                        <div className="userprofile__card-info">
                            <h5 className="userprofile__card-subtitle">Description</h5>
                            <p className="userprofile__card-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing 
                                elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati 
                                quod dolorum sint alias, possimus illum assumenda eligendi cumque?
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
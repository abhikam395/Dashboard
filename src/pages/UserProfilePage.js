import React, {Component} from 'react';
import './userprofilepage.scss';

import {FaUserPlus} from 'react-icons/fa';
import FooterComponent from '../components/FooterComponent';

const imageUrl = "https://i.pinimg.com/564x/6f/de/85/6fde85b86c86526af5e99ce85f57432e.jpg";
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?";

export default class UserProfilePage extends Component{
    render(){
        let {category, title} = this.props;
        return (
            <div className="
                userprofile 
                userprofile--size 
                userprofile--theme">
                
                <div className="userprofile__content">
                    {category && <h5 className="userprofile__category">{category}</h5>}
                    {title && <h1 className="userprofile__title">{title}</h1>}

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

                        <div className="
                            userprofile__accountdetail 
                            userprofile__accountdetail--size 
                            userprofile__accountdetail--theme">

                            <h3 className="userprofile__accountdetail-title">Account Details</h3>
                            <hr className="userprofile__line"></hr>
                            <div className="userprofile__accountdetail-container">
                                <div className="userprofile__row">
                                    <label className="userprofile__label">First Name</label>
                                    <input defaultValue="Abhishek" className="userprofile__input" type="text" />
                                </div>
                                <div className="userprofile__row">
                                    <label className="userprofile__label">Last Name</label>
                                    <input defaultValue="Brooks" className="userprofile__input" type="text" />
                                </div>
                                <div className="userprofile__row">
                                    <label className="userprofile__label">Email</label>
                                    <input defaultValue="abhi@gmail.com" className="userprofile__input" type="email" />
                                </div>
                                <div className="userprofile__row">
                                    <label className="userprofile__label">Password</label>
                                    <input className="userprofile__input" type="password" />
                                </div>
                                <div className="userprofile__row">
                                    <label className="userprofile__label">City</label>
                                    <input className="userprofile__input" type="text" />
                                </div>
                                <div className="userprofile__row userprofile__state">
                                    <label className="userprofile__label">State</label>
                                    <input className="userprofile__input" type="drop" />
                                </div>
                                <div className="userprofile__row userprofile__zip">
                                    <label className="userprofile__label">Zip</label>
                                    <input className="userprofile__input" type="drop" />
                                </div>
                                <div className="userprofile__row">
                                    <label className="userprofile__label">Description</label>
                                    <textarea className="userprofile__textarea" defaultValue={description}/>
                                </div>
                            </div>
                            <button className="userprofile__update-button">Update Account</button>
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}
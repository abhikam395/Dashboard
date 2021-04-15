import React, {Component} from 'react';
import './setting.scss';

import {AiFillSetting} from 'react-icons/ai';

export default class SettingComponent extends Component{
    render(){
        return (
            <div className="setting setting--size setting--theme">
                <AiFillSetting className="setting__icon" size="20"/>
            </div>
        )
    }
}
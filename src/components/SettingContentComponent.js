import React, {Component} from 'react';
import './settingcontent.scss';

import {AiFillCloseCircle} from 'react-icons/ai';

export default class SettingContentComponent extends Component{

    constructor(){
        super();
        this.close = this.close.bind(this);

    }

    close(){
        this.props.close();
    }

    render(){
        return (
            <div className="settingcontent settingcontent--size settingcontent--theme">
                <AiFillCloseCircle onClick={this.close} className="settingcontent__close-icon"/>
            </div>
        )
    }
}
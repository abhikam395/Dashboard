import React, {Component, Fragment} from 'react';
import './setting.scss';


import {AiFillSetting} from 'react-icons/ai';
import SettingContentComponent from './SettingContentComponent';

export default class SettingComponent extends Component{

    constructor(){
        super();
        this.state = {
            visible: false
        }
        this.onClick = this.onClick.bind(this);
        this.closeContent = this.closeContent.bind(this);
    }

    onClick(){
        let {visible} = this.state;
        this.setState({visible: !visible});
        console.log(1)
    }

    closeContent(){
        this.setState({visible: false});
    }

    render(){
        let {visible} = this.state;
        return (
            <Fragment>
                <div className="setting setting--size setting--theme" onClick={this.onClick}>
                    <AiFillSetting className="setting__icon" size="20" />
                </div>
                {visible && <SettingContentComponent close={this.closeContent} />}
            </Fragment>
        )
    }
}
import React, {Component} from 'react';
import './sidebar.scss';

import {HiPencil} from 'react-icons/hi';
import {AiFillFileAdd} from 'react-icons/ai';
import {CgComponents} from 'react-icons/cg';
import {RiTableFill} from 'react-icons/ri';
import {ImUser} from 'react-icons/im';
import {RiErrorWarningFill} from 'react-icons/ri';
import {RiFileList2Fill} from 'react-icons/ri';

import {Link, withRouter} from 'react-router-dom';

class SidebarSection extends Component{

    constructor(){
        super();
        this.state = {
            url: 'https://designrevision.com/demo/shards-dashboard-lite/images/shards-dashboards-logo.svg',
            options: [
                {id: 1, name: 'Blog Dashboard', icon: HiPencil, link: '/'},
                {id: 2, name: 'Blog Posts', icon: RiFileList2Fill, link: '/blog-posts'},
                {id: 3, name: 'Add New Post', icon: AiFillFileAdd, link: '/new-post'},
                {id: 4, name: 'Forms & Components', icon: CgComponents, link: '/form-components'},
                {id: 5, name: 'Tables', icon: RiTableFill, link: '/tables', category: 'OVERVIEW'},
                {id: 6, name: 'User Profile', icon: ImUser, link: '/user-profile'},
                {id: 7, name: 'Errors', icon: RiErrorWarningFill, link: '/errors'},
            ],
            previousHoveredItemId: 0
        }
    }

    componentDidMount(){
        let element = document.getElementsByClassName('sidebarsection__option')[0];
        element.classList.add('item-active');
        
        let box = document.getElementsByClassName('sidebarsection__box')[0];
        box.classList.add('box-hover');

        this.setState({previousHoveredItemId: 0})
    }

    mouseEnter(id){
        let {previousHoveredItemId} = this.state;
        if(id === previousHoveredItemId)  return;
        
        let itemElement = document.getElementsByClassName('sidebarsection__option')[id];
        itemElement.classList.add('item-active')

        let element = document.getElementsByClassName('sidebarsection__box')[id];
        element.classList.add('box-hover');
    }

    mouseLeave(id){
        let {previousHoveredItemId} = this.state;
        if(id === previousHoveredItemId)  return;

        let itemElement = document.getElementsByClassName('sidebarsection__option')[id];
        itemElement.classList.remove('item-active')

        let element = document.getElementsByClassName('sidebarsection__box')[id];
        element.classList.remove('box-hover');
    }

    onItemSelected(id){
        let {previousHoveredItemId} = this.state;

        let previousHoveredItem = 
            document.getElementsByClassName('sidebarsection__option')[previousHoveredItemId];
        previousHoveredItem.classList.remove('item-active');
 
        let element = document.getElementsByClassName('sidebarsection__box')[previousHoveredItemId];
        element.classList.remove('box-hover');

        let currentElement = document.getElementsByClassName('sidebarsection__option')[id];
        currentElement.classList.add('item-active');

        let currentBoxElement = document.getElementsByClassName('sidebarsection__box')[id];
        currentBoxElement.classList.add('box-hover');

        this.setState({previousHoveredItemId: id});
    }

    renderList(lists){
        return lists.map((item) => {
            let Icon = item.icon;
            return (
                <Link 
                    to={item.link}
                    onMouseEnter={() => this.mouseEnter(item.id - 1)}
                    onMouseLeave={() => this.mouseLeave(item.id - 1)}
                    onClick={this.onItemSelected.bind(this, item.id - 1)}
                    key={item.id}
                    className="
                        sidebarsection__option 
                        sidebarsection__option--size">
                    <span className="sidebarsection__box"/>
                    <Icon className="sidebarsection__option-icon" />
                    <span className="sidebarsection__option-name">{item.name}</span>
                </Link>
            )
            
        })
    }

    render(){
        let {url, options} = this.state;
        return (
            <main className="
                sidebarsection 
                sidebarsection--size 
                sidebarsection--theme">
                
                <header className="sidebarsection__head">
                    <img src={url} alt="icon" className="sidebarsection__icon"/>
                    <span className="sidebarsection__title">Shards Dashboard</span>
                </header>
                <ul className="
                    sidebarsection__options 
                    sidebarsection__options--size">
                    {this.renderList(options)}
                </ul>
            </main>
        )
    }
}

const SidebarSectionWithRouter = withRouter(SidebarSection);

export default SidebarSectionWithRouter;
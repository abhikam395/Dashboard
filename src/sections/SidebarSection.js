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
                {id: 1, name: 'Blog Dashboard', icon: HiPencil, link: '/', category: 'DASHBOARD', title: 'Blog Overview'},
                {id: 2, name: 'Blog Posts', icon: RiFileList2Fill, link: '/blog-posts', category: 'COMPONENTS', title: 'Blog Posts'},
                {id: 3, name: 'Add New Post', icon: AiFillFileAdd, link: '/new-post', category: 'BLOG POSTS', title: 'Add New Post'},
                {id: 4, name: 'Forms & Components', icon: CgComponents, link: '/form-components', category: 'OVERVIEW', title: 'Forms & Components'},
                {id: 5, name: 'Tables', icon: RiTableFill, link: '/tables', category: 'OVERVIEW', title: 'Data Tables'},
                {id: 6, name: 'User Profile', icon: ImUser, link: '/user-profile', category: 'OVERVIEW', title: 'User Profile'},
                {id: 7, name: 'Errors', icon: RiErrorWarningFill, link: '/errors', category: null, title: null},
            ],
            previousHoveredItem: {
                element: null,
                id: null
            },
        }
    }

    componentDidMount(){
        let element = document.getElementsByClassName('sidebarsection__option')[0];
        element.style.color = '#197DE8';
        
        let box = document.getElementsByClassName('sidebarsection__box')[0];
        box.classList.add('box-hover');

        this.setState({previousHoveredItem: {element: element, id: 0}})
    }

    mouseEnter(id){
        let {previousHoveredItem} = this.state;
        if(id === previousHoveredItem.id)  return;
        
        let element = document.getElementsByClassName('sidebarsection__box')[id];
        element.classList.add('box-hover');
    }

    mouseLeave(id){
        let {previousHoveredItem} = this.state;
        if(id === previousHoveredItem.id)  return;

        let element = document.getElementsByClassName('sidebarsection__box')[id];
        element.classList.remove('box-hover');
    }

    onItemSelected(){

    }

    renderList(lists){
        return lists.map((item) => {
            let Icon = item.icon;
            return (
                <Link 
                    to={{
                        pathname: item.link,
                        param: 'He'
                    }}
                    onMouseEnter={() => this.mouseEnter(item.id - 1)}
                    onMouseLeave={() => this.mouseLeave(item.id - 1)}
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
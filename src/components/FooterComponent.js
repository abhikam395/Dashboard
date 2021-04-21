import React from 'react';
import './footer.scss';

const menus = [
    {id: 1, name: 'Home'},
    {id: 2, name: 'Services'},
    {id: 3, name: 'About'},
    {id: 4, name: 'Products'},
    {id: 5, name: 'Blog'},
]

export default function FooterComponent(){

    function renderMenus(menus){
        return menus.map(menu => (
            <li className="footer__menu" key={menu.id}>
                <a href={`/#${menu.name}`} className="footer__link">{menu.name}</a>
            </li>
        ))
    }

    return (
        <footer className="footer footer--size footer--theme">
            <ul className="footer__menus">
                {renderMenus(menus)}
            </ul>
        </footer>
    )
}
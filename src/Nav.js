import React from 'react';
import {
    NavLink,
} from 'react-router-dom';

//import the nav items
import { navItems } from './data';


/**
 * stateless Nav component 
 * returns a NavLink component specific to 'react-router-dom'
 * It handles a custom activeStyle to give user an idea about which route is active  - applies styling to nav buttons when url matched 
 */
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                {navItems.map(n =>
                    <li key={n.id}>
                        <NavLink to={n.path} activeStyle={{
                            backgroundColor: '#275270'
                        }}>
                            {n.text}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Nav;
import React from 'react';
import {
    NavLink,
} from 'react-router-dom';

import { navItems } from './config';

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
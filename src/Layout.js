import React from 'react';
// import Search from './Search';
import Search from './Search';
import Nav from './Nav';


/**
 * stateless Layout control to render static layout to the app
 */
const Layout = () => {
    return (
        <div className="Layout">
            <Search />
            <Nav />
        </div>
    );
}

export default Layout;
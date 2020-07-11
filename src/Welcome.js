import React from 'react';

/**
 * stateless Welcome component 
 * - just for welcoming user before he/she selects a static route or type a custom search value to the search form
 * - aiming to enhance UX here => instead of directly applying a static route page (cats, dogs, computers)
 */
const Welcome = () => {
    return (
        <div className="displayGeneric">
            <h2>
                Welcome to Gallery App <span aria-label="Rocket" role="img">🚀</span>
            </h2>
            <h5>
                Find your favorite photos via predefined categories above or search one
            </h5>
        </div>
    );
}

export default Welcome;
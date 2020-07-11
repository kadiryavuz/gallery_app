import React from 'react';

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
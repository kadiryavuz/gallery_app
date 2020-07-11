import React from 'react';

const NoResult = () => {
    return (
        <div className="photo-container">
            <div className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </div>
        </div>
    );
}

export default NoResult;
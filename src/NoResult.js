import React from 'react';

/**
 * stateless NoResult component
 * gets used where necessary when a search performed with no results
 */
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
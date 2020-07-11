import React from 'react';

const WelcomeSearch = () => {
    return (
        <div className="displayGeneric">
             <h2>
                Search<span aria-label="Search" role="img">🔎</span>
            </h2>
            <h5>
                Start a search to find photos in a specific category <em>i.e. sunsets</em>
            </h5>
        </div>
    );
}

export default WelcomeSearch;
import React from 'react';

/**
 * stateless WelcomeSearch ucomponent
 * -just a simple welcoming page in the search page when user gets navigated to only '/search' without a text param, this component gets rendered and welcomes the user
 */
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
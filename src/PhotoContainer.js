import React from 'react';
import PropTypes from "prop-types";

import NoResult from './NoResult';
import Loading from './Loading';

const PhotoContainer = (props) => {

    if(props.isLoading) {
        return (
            <Loading />
        )
    }
    if (props && props.images && props.images.length > 0) {
        return (
            <div className="photo-container">
                <h2>{props.bySearch ? `Results for ${props.searchCategory}` : 'Results'}</h2>
                <ul>
                    {props.images.map(i =>
                        <li key={i.id}>
                            <img src={`https://farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg`} alt={i.title} />
                        </li>
                    )}

                </ul>
            </div>
        );
    }


    return (
        <NoResult />
    )

}

PhotoContainer.propTypes = {
    images: PropTypes.array,
    isLoading: PropTypes.bool,
    bySearch: PropTypes.bool,
    searchCategory: PropTypes.string
}

export default PhotoContainer;
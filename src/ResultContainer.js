import React from 'react';
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import PhotoContainer from './PhotoContainer';
import Loading from './Loading';
import WelcomeSearch from './WelcomeSearch';

import { apiKey } from './config';

class ResultContainer extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            searchVal: this.props.match.params.text,
            results: null,
            searchCompleted: false,
            isLoading: false,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if ( (nextProps.match.params.text !== prevState.searchVal)) {
            return { searchVal: nextProps.match.params.text, isLoading: true, results: null};
        }
        return null;
    }

    loadResults = async (pText) => {
       
        const categoryReqUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${pText}&per_page=24&format=json&nojsoncallback=1`;

        const categoryResponse = await fetch(categoryReqUrl);
        const categoryData = await categoryResponse.json();

         this.setState(prevState => ({
            results: categoryData.photos.photo,
            searchCompleted: true,
            searchVal: pText,
            isLoading: false,
        }))
    }

    async componentDidMount() {
        const { text } = this.props.match.params;
        //API call to flickr
       
        await this.loadResults(text);

        
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.results === null) {
          // At this point, we're in the "commit" phase, so it's safe to load the new data.
          this.loadResults(this.state.searchVal);
        }
      }

    render() {
        const { searchCompleted, results, searchVal, isLoading } = this.state;
        // const { text } = this.props.match.params;


        if (!searchVal) {
            return (<WelcomeSearch />);
        }

        if (searchCompleted) {
            return (
                <PhotoContainer images={results} bySearch={true} searchCategory={searchVal} isLoading={isLoading} />
            )
        }

        return (
            <Loading />
        )
    }

}

ResultContainer.propTypes = {
    match: PropTypes.object.isRequired,
};

export default withRouter(ResultContainer);
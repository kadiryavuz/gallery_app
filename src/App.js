import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Layout from './Layout';
import PhotoContainer from './PhotoContainer';
import ResultContainer from './ResultContainer';
import NotFound from './NotFound';
import Loading from './Loading';
import Welcome from './Welcome';

import { apiKey } from './config';


/**
 * stateful App component
 * - manages fetching photos fro three static routes when the app first loads
 * - while fetching the data in the first load applies text-based Loading indicator by controlled rendering mechanism out of the routing side
 * - renders routing elements with static layout and pages neccessary to display photos
 * - applied routing mechanism also controls if there is an unmatched route then displays user-firendly message with the location info
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: null,
      dogs: null,
      computers: null,
      fetchCompleted: false,
    }
  }

  async componentDidMount() {
    const catsReqUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`;
    const dogsReqUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`;
    const compReqUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`;

    const catsResponse = await fetch(catsReqUrl);
    const catsData = await catsResponse.json();

    const dogsResponse = await fetch(dogsReqUrl);
    const dogsData = await dogsResponse.json();

    const compResponse = await fetch(compReqUrl);
    const compData = await compResponse.json();


    this.setState(prevState => ({
      cats: catsData.photos.photo,
      dogs: dogsData.photos.photo,
      computers: compData.photos.photo,
      fetchCompleted: !prevState.fetchCompleted
    }))
  }

  render() {
    const { fetchCompleted, computers, dogs, cats } = this.state;
    return (
      <div className="App">
        {fetchCompleted ?
          <Router>
            <Layout />
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/cats">
                <PhotoContainer images={cats} />
              </Route>
              <Route path="/dogs">
                <PhotoContainer images={dogs} />
              </Route>
              <Route path="/computers">
                <PhotoContainer images={computers} />
              </Route>
              <Route path="/search/:text?">
                <ResultContainer />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
          :
          <Loading />
        }

      </div>
    );
  }

}

export default App;

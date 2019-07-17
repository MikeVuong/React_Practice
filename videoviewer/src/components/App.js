import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos : [] };

    onTermSubmit = async term => {
        // Axios request
        const response = await youtube.get('/search',{
            params : {
                // Name based on api documentation
                q: term
            }
        });
        // List of videos from response object 
        // being set to the state object
        this.setState({ videos: response.data.items})
    };
  
    render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos}></VideoList>
      </div>
    );
  }
}

export default App;

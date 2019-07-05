import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

class App extends React.Component {

//   constructor(props) {
//     super(props);

//     // Initial state, the only time we can directly assign state
//     this.state = { lat: null, errorMessage: "" };
    
//   }

  state = {lat: null, errorMessage:''}

  componentDidMount()
  {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude })
        ,
        err => this.setState({ errorMessage: err.message })
      );
  }

  renderContent() {
    if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>
    }

    return <div><Spinner message="Please accept location request"/></div>;
  }

  // Render gets called multiple times, do not put one time calls in function
  // Conditional Rendering
  render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

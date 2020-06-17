import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn.js'
import Home from './components/Home/Home.js';

const initialState = {
  route: 'home',
  isSignedIn: false,
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { route, isSignedIn } = this.state;
    return (
      <div className="App">
        {route === 'signin'
        ? <div>
            <SignIn onRouteChange={this.onRouteChange} />
          </div>
        : <div> {/*route === 'home'*/}
            <Home onRouteChange={this.onRouteChange} onDealSubmit={this.onDealSubmit} />
          </div>  
        }
      </div>
    );
  }

}

export default App;

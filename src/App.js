import React, { Component } from 'react';
import {Button} from 'primereact/components/button/Button';
import logo from './logo.png';
import './App.css';
import 'primereact/resources/primeng.min.css';
import 'primereact/resources/themes/omega/theme.css';

class App extends Component {
    
    constructor() {
        super();
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
    }
    
    increment() {
        this.setState({count: this.state.count + 1});
    }
    
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to PrimeReact</h2>
            </div>
            <div className="App-intro">
              <Button label="Click" onClick={this.increment} />
              
              <p>Number of Clicks: {this.state.count}</p>
            </div>
          </div>
        );
    }
}

export default App;

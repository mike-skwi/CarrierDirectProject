import React from 'react';
import './App.css';
import CupcakeBuilder from './components/CupcakeBuilder.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    selectedBase : '',
    selectedFrosting : '',
    selectedTopping : '',
    currentSelection : 'Starting'
  }
  
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <CupcakeBuilder/>
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Cakes from './Components/Cakes'
import Store from './Redux/Store'

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <div>
          <Cakes/>
        </div>
      </Provider>
    </div>
  );
}

export default App;

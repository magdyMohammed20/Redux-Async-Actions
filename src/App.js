import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import UserContainer from './Components/UserContainer'
import Store from './Redux/Store'

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import CounterGroup from './component/counterGroup';
import MyCounterApp from './containers/CounterContainer';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <CounterGroup></CounterGroup> */}
        <MyCounterApp></MyCounterApp>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import AssetsContainer from './AssetsContainer';
import Dashboard from './Dashboard';

const App = () => (
  <div id='app' className='ui container'>
    <header></header>
    <Dashboard />
    <AssetsContainer />
  </div>
)

export default App;
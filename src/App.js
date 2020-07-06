import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PostForm/>
        <hr/>
        <Posts/>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ContempNav from './components/ContempNav';
import InspoPage from './Pages/InspoPage';
import LookbookPage from './Pages/LookbookPage';
import Header from './components/Header';
import './js/script.js';
import './css/main.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <ContempNav />
        <Route exact path='/' component={LookbookPage} />
        <Route exact path='/inspo' component={InspoPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;

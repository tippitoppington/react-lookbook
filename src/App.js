import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ContempNav from './components/ContempNav';
import Inspo from './Pages/Inspo';
import Lookbook from './Pages/Lookbook';
import './js/script.js';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>
        <ContempNav />
        <Route exact path='/' component={Lookbook} />
        <Route exact path='/inspo' component={Inspo} />
      </BrowserRouter>
    </div>
  );
}

export default App;

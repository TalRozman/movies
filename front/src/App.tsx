import React from 'react';
import './App.css';
import ListMovies from './components/CardsCarousel';
import NewCardsCarousel from './components/NewCardsCarousel';
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav';
function App() {
  return (
    <div className='App'>
      <Nav/>
      <br/>
      <Outlet />
    </div>
  );
}

export default App;

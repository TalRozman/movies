import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryView from './components/CategoryView';
import Home from './components/Home';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>}/>
          <Route path='/movies/:category' element={<CategoryView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
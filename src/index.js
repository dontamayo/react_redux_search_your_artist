import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore)


ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>


  , document.getElementById('root'));

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route} from 'react-router-dom'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

import App from './components/app';
import reducers from './reducers';

ReactDom.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Route path='/' component={App}>
      </Route>
    </Router>
  </Provider>
  ,document.querySelector('#react-container')
  // , document.getElementById('react-container')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk'
import hnApp from './reducers'
import App from './App';
import './index.css';

//we create the store and make it available to our app through Provider.
// const store = createStore(
//   hnApp,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(
  hnApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
<<<<<<< HEAD
  applyMiddleware(promiseMiddleware(), thunkMiddleware)
=======
  applyMiddleware( promiseMiddleware(), thunkMiddleware)
>>>>>>> 37bc7bd3aa9277268e6c5e7b8cefa875decddd9c
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}

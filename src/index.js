import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './Reducers/index';
import thunk from 'redux-thunk';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const router = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();

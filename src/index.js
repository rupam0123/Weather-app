import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { getAllUser } from './actions'
import './index.css';
import App from './container/App';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
store.dispatch(getAllUser());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)




'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

import store from './store'
import Root from './components/Root'

render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('main')
)
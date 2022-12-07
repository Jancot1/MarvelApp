import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { MarvelApp } from './MarvelApp'
import { AppTheme } from "./theme"
import { store } from './store'
import 'animate.css';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <MarvelApp/>
      </AppTheme>
    </Provider>
  </React.StrictMode>
)

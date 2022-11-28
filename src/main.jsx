import React from 'react'
import ReactDOM from 'react-dom/client'
import { MarvelApp } from './MarvelApp'
import { Provider } from 'react-redux'
import { AppTheme } from "./theme/AppTheme"
import { store } from './store'

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

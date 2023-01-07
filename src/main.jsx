import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { MarvelApp } from './MarvelApp'
import { AppTheme } from "./theme"
import { store } from './store'
import 'animate.css';

import './styles.css'
import { SnackbarProvider } from './context/SnackbarProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider>
        <AppTheme>
          <MarvelApp/>
        </AppTheme>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
)

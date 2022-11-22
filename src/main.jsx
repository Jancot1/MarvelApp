import React from 'react'
import ReactDOM from 'react-dom/client'
import { MarvelApp } from './MarvelApp'
import { AppTheme } from "./theme/AppTheme"
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <MarvelApp />
    </AppTheme>
  </React.StrictMode>
)

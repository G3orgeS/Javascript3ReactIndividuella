import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/index.scss'
import 'bootstrap/dist/js/bootstrap.js'
import { Provider } from 'react-redux'
// import { store } from './app/store.js'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
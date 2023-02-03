import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import './reset.css'
import { BrowserRouter } from 'react-router-dom'
import App from './container/App/App'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </>
)

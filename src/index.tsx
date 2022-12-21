import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import Header from './Header/Header'
import Main from './Main/Main'
import './index.scss'

const App = () => {
   return (
      <>
         <section className="container-for-all">
            <Header />
            <div className="main-footer-container">
               <Main />
            </div>
         </section>
      </>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{<App />}</React.StrictMode>)

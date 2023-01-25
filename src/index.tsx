import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import Header from './Header/Header'
import Main from './Main/Main'
import './index.scss'
import HbMenu from './components/HbMenu/HbMenu'

const App = () => {
   const [menuActive, setMenuActive] = useState<boolean>(false)
   return (
      <>
         <section className="container-for-all">
            <header>
               <div className="container-menu-mobile">
                  <HbMenu active={menuActive} setActive={setMenuActive} />
                  <div
                     className={menuActive ? 'hb-menu active' : 'hb-menu'}
                     onClick={() => setMenuActive(!menuActive)}
                  >
                     <span />
                  </div>
               </div>
               <Header />
            </header>
            <div className="main-footer-container">
               <Main />
            </div>
         </section>
      </>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
)

import { useState, useEffect } from 'react'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import HbMenu from '../../components/HbMenu/HbMenu'
import { fetchAuthMe, selectIsAuth } from '../../redux/slices/auth'
import Header from '../Header/Header'
import Main from '../Main/Main'
import './App.scss'

const App = () => {
   const [menuActive, setMenuActive] = useState<boolean>(false)

   const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
   const isAuth = useSelector(selectIsAuth)

   useEffect(() => {
      dispatch(fetchAuthMe())
   }, [])

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

export default App

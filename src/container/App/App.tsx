import { useState, useEffect } from 'react'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { fetchAuthMe } from '../../redux/slices/auth'
import Header from '../Header/Header'
import Main from '../Main/Main'
import './App.scss'

const App = () => {
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

   useEffect(() => {
      dispatch(fetchAuthMe())
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <>
         <section className="container-for-all">
            <header>
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

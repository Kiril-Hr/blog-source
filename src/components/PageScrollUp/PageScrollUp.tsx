import { useState, useEffect } from 'react'
import classes from './PageScrollUp.module.scss'

const PageScrollUp = () => {
   const [scroll, setScroll] = useState(0)

   const handleScrollEffectUnderMenu = () => {
      setScroll(window.scrollY)
   }

   const toUpPage = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScrollEffectUnderMenu)
   })

   return (
      <div
         className={scroll < 500 ? classes.toUpDeactivated : classes.toUpActive}
         onClick={toUpPage}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 346.35"
            className={classes.arrowUp}
         >
            <path d="M410.1 346.35 256 201.69 101.9 346.35 0 240.31 256 0l256 240.31z" />
         </svg>
      </div>
   )
}
export default PageScrollUp

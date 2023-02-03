import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
const Header = () => {
   const [isActive, setIsActive] = useState<boolean>(false)
   const accountDetailsBtn = document.querySelector('.account-details')

   const activeAccountDetails = (e?: any) => {
      e.stopPropagation()
      setIsActive((prevstate) => !prevstate)
   }

   window.addEventListener('click', (e) => {
      if (e.currentTarget !== accountDetailsBtn) {
         return setIsActive(false)
      }
   })

   return (
      <>
         <div
            className={
               isActive
                  ? 'container-for-aside-menu active'
                  : 'container-for-aside-menu'
            }
         >
            <nav className="under-menu">
               <span className="logo-menu" />
               <div className="container-menu">
                  <ul className="menu">
                     <li>
                        <NavLink to="/">Main</NavLink>
                     </li>
                     <li>
                        <NavLink to="/blogs">Blogs</NavLink>
                     </li>
                     <li>
                        <NavLink to="/articles">Articles</NavLink>
                     </li>
                     <li
                        className={
                           isActive
                              ? 'account-details active'
                              : 'account-details'
                        }
                        onClick={activeAccountDetails}
                     >
                        <ul>
                           <li>
                              <NavLink to="/my-blog">My Blog</NavLink>
                           </li>
                           <li>
                              <NavLink to="/account-settings">Settings</NavLink>
                           </li>
                           <li>
                              <NavLink to="/articles">Sign up</NavLink>
                           </li>
                           <li>
                              <NavLink to="/articles">Log in</NavLink>
                           </li>
                           <li>
                              <button>Log out</button>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </>
   )
}

export default Header

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher'
import { logout, selectIsAuth } from '../../redux/slices/auth'
import './Header.scss'
const Header = () => {
   const accountDetailsBtn = document.querySelector('.account-details')

   const navigate = useNavigate()

   const [isActive, setIsActive] = useState<boolean>(false)

   const dispatch = useDispatch()
   const isAuth = useSelector(selectIsAuth)

   const onClickLogout = () => {
      dispatch(logout())
      window.localStorage.removeItem('token')
      navigate('/')
   }

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
               isActive ? 'container-for-menu active' : 'container-for-menu'
            }
         >
            <nav className="above-menu">
               <div className="container-menu">
                  <ul className="menu">
                     {isAuth && (
                        <li className="theme">
                           <ThemeSwitcher />
                        </li>
                     )}
                     <li>
                        <NavLink to="/">Main</NavLink>
                     </li>
                     {!isAuth ? (
                        <li>
                           <NavLink to="/register">Sign up</NavLink>
                        </li>
                     ) : (
                        ''
                     )}
                     {isAuth ? (
                        <>
                           <li
                              className={
                                 isActive
                                    ? 'account-details active'
                                    : 'account-details'
                              }
                              onClick={activeAccountDetails}
                           >
                              <svg
                                 height="30"
                                 id="settings"
                                 width="30"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <title />
                                 <g data-name="Layer 2" id="Layer_2">
                                    <path d="M12,15a3,3,0,1,0-3-3A3,3,0,0,0,12,15Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,12,11Z" />
                                    <path d="M2.81,16.95,7,21.19l2-2V22h6V19.24l2,2,4.24-4.24L19.24,15H22V9H19.24l1.95-1.95L17,2.81l-2,2V2H9V4.76l-2-2L2.81,7.05,4.76,9H2v6H4.76ZM4,13V11H7.06l.24-.67a4.92,4.92,0,0,1,.2-.49l.3-.64L5.64,7.05,7,5.64,9.21,7.8l.64-.3a5.19,5.19,0,0,1,.49-.2L11,7.06V4h2V7.06l.67.24a5.19,5.19,0,0,1,.49.2l.64.3L17,5.64l1.41,1.41L16.2,9.21l.3.64a4.92,4.92,0,0,1,.2.49l.24.67H20v2H16.94l-.24.67a4.92,4.92,0,0,1-.2.49l-.3.64,2.16,2.16L17,18.36,14.79,16.2l-.64.3a5.19,5.19,0,0,1-.49.2l-.67.24V20H11V16.94l-.67-.24a5.19,5.19,0,0,1-.49-.2l-.64-.3L7,18.36,5.64,16.95,7.8,14.79l-.3-.64a4.92,4.92,0,0,1-.2-.49L7.06,13Z" />
                                 </g>
                              </svg>
                              <ul>
                                 <li>
                                    <NavLink to="/my-blog">My Blog</NavLink>
                                 </li>
                                 <li>
                                    <NavLink to="/blogs">Blogs</NavLink>
                                 </li>
                                 <li>
                                    <NavLink to="/articles">Articles</NavLink>
                                 </li>
                                 <li>
                                    <button onClick={onClickLogout}>
                                       Log out
                                    </button>
                                 </li>
                              </ul>
                           </li>
                        </>
                     ) : (
                        ''
                     )}
                  </ul>
               </div>
            </nav>
         </div>
      </>
   )
}

export default Header

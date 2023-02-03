import { NavLink } from 'react-router-dom'
import './HbMenu.scss'
type Props = {
   active: any
   setActive: any
}
const HbMenu = ({ active, setActive }: Props) => {
   return (
      <>
         <div className="container-for-mobile-menu">
            <nav className="mobile-menu">
               <span className="logo-menu" />
               <div
                  className={
                     active
                        ? 'container-mobile-menu active'
                        : 'container-mobile-menu'
                  }
                  onClick={() => setActive(false)}
               >
                  <ul className="mobile-menu">
                     <li>
                        <NavLink to="/">Main</NavLink>
                     </li>
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
                        <NavLink to="/account-settings">Settings</NavLink>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </>
   )
}
export default HbMenu

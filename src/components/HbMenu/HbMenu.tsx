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
                        <a href="../../public/index.html">Home</a>
                     </li>
                     <li>
                        <a href="../../public/index.html">About</a>
                     </li>
                     <li>
                        <a href="../../public/index.html">Blogs</a>
                     </li>
                     <li>
                        <a href="../../public/index.html">Articles</a>
                     </li>
                     <li>
                        <a href="../../public/index.html">Contacts</a>
                     </li>
                     <li>
                        <a href="../../public/index.html">My Account</a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </>
   )
}
export default HbMenu

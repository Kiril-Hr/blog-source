import './Main.scss'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Articles from '../../Pages/Articles/Articles'
import Article from '../../Pages/Article/Article'
import MyAccount from '../../Pages/MyAccount/MyAccount'
import Blogs from '../../Pages/Blogs/Blogs'
import MyBlog from '../../Pages/MyBlog/MyBlog'
import CreatedArticle from '../../Pages/CreatedArticle/CreatedArticle'
import Login from '../../Pages/Login/Login'
import Registration from '../../Pages/Registration/Registration'

const Main = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="articles" element={<Articles />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="account-settings" element={<MyAccount />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="my-blog" element={<MyBlog />} />
            <Route path="add-article" element={<CreatedArticle />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
         </Routes>
      </>
   )
}
export default Main

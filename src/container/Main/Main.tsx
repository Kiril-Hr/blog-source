import './Main.scss'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Articles from '../../Pages/Articles/Articles'
import Article from '../../Pages/Article/Article'
import MyAccount from '../../Pages/MyAccount/MyAccount'
import Blogs from '../../Pages/Blogs/Blogs'
import MyBlog from '../../Pages/MyBlog/MyBlog'
import CreatedArticle from '../../Pages/CreatedArticle/CreatedArticle'



const Main = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='articles' element={<Articles />}/>
            <Route path='/article/:id' element={<Article />}/>
            <Route path='myaccount' element={<MyAccount />}/>
            <Route path='blogs' element={<Blogs />}/>
            <Route path='myblog' element={<MyBlog />}/>
            <Route path='createarticle' element={<CreatedArticle />}/>
         </Routes>
      </>
   )
}
export default Main

import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Articles from '../../Pages/Articles/Articles'
import Article from '../../Pages/Article/Article'
import Blogs from '../../Pages/Blogs/Blogs'
import MyBlog from '../../Pages/MyBlog/MyBlog'
import CreatedArticle from '../../Pages/CreatedArticle/CreatedArticle'
import Login from '../../Pages/Login/Login'
import Registration from '../../Pages/Registration/Registration'
import UserBlog from '../../Pages/UserBlog/UserBlog'
import { EditCheckPost } from '../../Pages/ArticleCheck/EditCheckPost'
import CheckPost from '../../Pages/ArticleCheck/CheckPost'

const Main = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="articles" element={<Articles />} />
         <Route path="/article/:id" element={<Article />} />
         <Route path="/article/:id/edit" element={<CreatedArticle />} />
         <Route path="/blog/:id" element={<UserBlog />} />
         <Route path="blogs" element={<Blogs />} />
         <Route path="my-blog" element={<MyBlog />} />
         <Route path="add-article" element={<CreatedArticle />} />
         <Route path="login" element={<Login />} />
         <Route path="register" element={<Registration />} />
         <Route path="/article/check-edit/:id" element={<EditCheckPost />} />
         <Route path="/article-check/:id" element={<CheckPost />} />
      </Routes>
   )
}
export default Main

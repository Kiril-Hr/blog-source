import { blogsArray } from '../../utils/ArticlesArray'
import RelatedArticleTemplate from '../../components/ArticlesComponent/RelatedArticleTemplate'
import Title from '../../components/Title/Title'
import './Home.scss'
import { cutText } from '../../utils/functions'
import { NavLink } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'

const Home = () => {
   const items = [...blogsArray].sort(
      (a: any, b: any) => b.viewsCount - a.viewsCount
   )

   const [
      mainArticle,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ...rest
   ] = items

   const filteredArrOfArticles = [
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
   ].sort((a: any, b: any) => b.id - a.id)

   filteredArrOfArticles.length =
      window.innerWidth > 2600
         ? 9
         : window.innerWidth > 2000
         ? 8
         : window.innerWidth > 1850
         ? 7
         : 6

   rest.length =
      window.innerWidth > 2600
         ? 8
         : window.innerWidth > 2000
         ? 7
         : window.innerWidth > 1850
         ? 6
         : 5

   return (
      <div className="home">
         <div className="container-popular-main">
            <div className="main-article">
               <img src={mainArticle.photo} alt={mainArticle.user} />
               <NavLink to={`/article/${mainArticle._id}`}>
                  {mainArticle.title}
               </NavLink>
               <p>
                  {window.innerWidth > 1450
                     ? cutText(mainArticle.text!, 1300)
                     : cutText(mainArticle.text!, 400)}
               </p>
               <div>
                  <p>{mainArticle.user}</p>
                  <time dateTime={mainArticle.createdAt}>
                     {mainArticle.createdAt}
                  </time>
               </div>
            </div>
            <div className="popular-articles">
               <Title
                  title="Most popular articles"
                  fontSize="1.1rem"
                  justifyContent="flex-start"
               />
               <div className="related-article-container">
                  {rest.map((article) => (
                     <RelatedArticleTemplate
                        title={article.title}
                        createdAt={article.createdAt}
                        user={article.user}
                        tags={article.tags}
                        _id={article._id}
                        key={article._id}
                     />
                  ))}
               </div>
            </div>
         </div>
         <div className="container-slider-home">
            <Title title="Other popular articles" fontSize="1.7rem" />
            <div className="slider-home">
               <Slider
                  items={filteredArrOfArticles}
                  slidesPerView={'auto'}
                  spaceBetween={40}
               />
            </div>
         </div>
      </div>
   )
}

export default Home

import { blogsArray } from '../../utils/ArticlesArray'
import RelatedArticleTemplate from '../../components/ArticlesComponent/RelatedArticleTemplate'
import Title from '../../components/Title/Title'
import './Home.scss'
import { cutText } from '../../utils/functions'
import { NavLink } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'

const Home = () => {
   const items = [...blogsArray].sort((a: any, b: any) => b.views - a.views)

   const [mainArticle] = items

   const [, , , , , , , , , , ...rest] = items

   const [, one, two, three, four, five, six, seven, eight, nine] = items

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

   filteredArrOfArticles.length = 5

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
               <img src={mainArticle.photo} alt={mainArticle.nickname} />
               <NavLink to={`/article/${mainArticle.id}`}>
                  {mainArticle.title}
               </NavLink>
               <p>
                  {window.innerWidth > 1450
                     ? cutText(mainArticle.description, 1300)
                     : cutText(mainArticle.description, 400)}
               </p>
               <div>
                  <p>{mainArticle.author}</p>
                  <time dateTime={mainArticle.date}>{mainArticle.date}</time>
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
                        date={article.date}
                        author={article.author}
                        tags={article.tags}
                        id={article.id}
                        key={article.id}
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

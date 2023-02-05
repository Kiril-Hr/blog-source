import { useParams } from 'react-router-dom'
import {
   blogsArray,
   BlogsProps,
   getBlogsObject,
} from '../../utils/ArticlesArray'
import Title from '../../components/Title/Title'
import './Article.scss'
import SliderAside from '../../components/Slider/SliderAside'

type ArticlePageProps = {
   [id: number]: BlogsProps
}

const Article = () => {
   const { id } = useParams()

   const articlePage: ArticlePageProps = getBlogsObject(blogsArray)

   const currentArticle = articlePage[parseInt(id!)]

   const filteredArticlesByChapter = blogsArray
      .filter(
         (article) =>
            article.tags === currentArticle.tags &&
            Math.abs(currentArticle.id - article.id) <= 50 &&
            article.id !== currentArticle.id
      )
      .sort((a: any, b: any) => b.id - a.id)

   const maxQtyRelatedArticles = () =>
      filteredArticlesByChapter.length > 10
         ? (filteredArticlesByChapter.length = 10)
         : filteredArticlesByChapter

   maxQtyRelatedArticles()

   return (
      <>
         <div className="selected-article">
            <Title
               title={`${currentArticle.title}`}
               fontSize={'3.25rem'}
               justifyContent={'flex-start'}
            />
            <div className="author-block">
               <img
                  src={currentArticle.authorPhoto}
                  alt={currentArticle.nickname}
               />
               <h3>{currentArticle.nickname}</h3>
               <h4>{currentArticle.author}</h4>
               <time>{currentArticle.date}</time>
               <div>
                  Chapter: <i>{currentArticle.tags}</i>
               </div>
            </div>
            <div className="img-of-main-article-plus-related-articles">
               {window.innerWidth > 1850 ? (
                  <Title
                     title={'Related Articles'}
                     justifyContent={'flex-end'}
                     fontSize={'3.6rem'}
                  />
               ) : (
                  ''
               )}
               <div className="container-slider-main-photo">
                  <img
                     src={currentArticle.photo}
                     alt={currentArticle.author}
                     className="img"
                  />
                  <div className="related-article-container">
                     {window.innerWidth <= 1850 ? (
                        <Title
                           title={'Related Articles'}
                           justifyContent={'flex-start'}
                           fontSize={'3.6rem'}
                        />
                     ) : (
                        ''
                     )}
                     <SliderAside
                        items={filteredArticlesByChapter}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        simulateTouch={true}
                        freeMode={true}
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Article

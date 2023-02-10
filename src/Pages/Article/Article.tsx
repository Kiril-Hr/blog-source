import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
   blogsArray,
   BlogsProps,
   getBlogsObject,
} from '../../utils/ArticlesArray'
import Title from '../../components/Title/Title'
import './Article.scss'
import SliderAside from '../../components/Slider/SliderAside'
import axios from '../../axios'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'

type ArticlePageProps = {
   [id: number]: BlogsProps
}

const Article = () => {
   const [data, setData] = useState<any>()
   const [isLoading, setIsLoading] = useState<boolean>(true)
   const { id } = useParams()

   useEffect(() => {
      axios
         .get(`/posts/${id}`)
         .then((res) => {
            setData(res.data)
            setIsLoading(false)
         })
         .catch((err) => {
            console.warn(err)
            alert('Failed to get post')
         })
   }, [])

   // const articlePage: ArticlePageProps = getBlogsObject(blogsArray)

   // const data = articlePage[parseInt(id!)]

   // const filteredArticlesByChapter = blogsArray
   //    .filter(
   //       (article) =>
   //          article.tags === data.tags &&
   //          Math.abs(data._id - article._id) <= 50 &&
   //          article._id !== data._id
   //    )
   //    .sort((a: any, b: any) => b.id - a.id)

   // const maxQtyRelatedArticles = () =>
   //    filteredArticlesByChapter.length > 10
   //       ? (filteredArticlesByChapter.length = 10)
   //       : filteredArticlesByChapter

   // maxQtyRelatedArticles()
   console.log(data)

   if (isLoading) {
      return <LoadingCircle />
   }

   return (
      <>
         <div className="selected-article">
            <Title
               title={`${data.title}`}
               fontSize={'3.25rem'}
               justifyContent={'flex-start'}
            />
            <div className="author-block">
               {/* <img src={data.userPhoto} alt={data.user} />  */}
               {/* <h4>{data.user}</h4> */}
               <time>{data.createdAt}</time>
               {/* <div>Chapter: <i>{data.tags}</i></div> */}
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
                  {/* <img src={data.photo} alt={data.user} className="img" /> */}
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
                     {/* <SliderAside
                        items={filteredArticlesByChapter}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        simulateTouch={true}
                        freeMode={true}
                     /> */}
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Article

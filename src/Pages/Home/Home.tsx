import RelatedArticleTemplate from '../../components/ArticlesComponent/RelatedArticleTemplate'
import Title from '../../components/UI/Title/Title'
import './Home.scss'
import { cutSlash, cutText, dateUTC } from '../../utils/functions'
import { NavLink } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsPopular } from '../../redux/slices/posts'
import { useEffect, useState } from 'react'
import LoadingCircle from '../../components/UI/LoadingCircle/LoadingCircle'
import Skeleton from '../../components/ArticlesComponent/Skeleton'
import UserInfo from '../../components/UserInfo/UserInfo'
import PageScrollUp from '../../components/PageScrollUp/PageScrollUp'
import { SliderItemType } from '../../utils/types'
import { BASEURL } from '../../utils/URL'

const Home = () => {
   const dispatch = useDispatch<any>()

   const [isLoading, setIsLoading] = useState(true)

   const { posts } = useSelector((state: any) => state.posts)

   const isPostLoading: any = posts.status === 'loading'

   useEffect(() => {
      dispatch(fetchPostsPopular())
      setIsLoading(false)
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   if (isLoading) {
      return <LoadingCircle />
   }

   const popularPostsByViews = structuredClone(posts.items)

   const [mainPost, ...restPosts] = popularPostsByViews

   const [
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ...otherPopularArticles
   ] = restPosts

   const MostPopularArticles = [
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
   ]

   return (
      <div className="home">
         <div className="container-popular-main">
            {isPostLoading ? (
               <LoadingCircle />
            ) : (
               <div className="main-article">
                  <img
                     src={
                        mainPost.imageUrl
                           ? `${BASEURL}${cutSlash(mainPost.imageUrl)}`
                           : ''
                     }
                     alt={mainPost.user.fullName}
                  />
                  <NavLink to={`/article/${mainPost._id}`}>
                     {mainPost.title}
                  </NavLink>
                  <p>
                     {window.innerWidth > 2450
                        ? cutText(mainPost.text!, 2200)
                        : window.innerWidth < 2450 && window.innerWidth > 1450
                        ? cutText(mainPost.text!, 1300)
                        : window.innerWidth < 1450
                        ? cutText(mainPost.text!, 800)
                        : cutText(mainPost.text!, 800)}
                  </p>
                  <div>
                     <div>
                        <UserInfo {...mainPost.user} />
                     </div>
                     <time dateTime={dateUTC(mainPost.createdAt)}>
                        {dateUTC(mainPost.createdAt)
                           .slice(0, 19)
                           .replace('T', ' ')}
                     </time>
                  </div>
               </div>
            )}

            <div className="popular-articles">
               <Title
                  title="Most popular articles"
                  fontSize="1.1rem"
                  justifyContent="flex-start"
               />
               <div className="related-article-container">
                  {isPostLoading ? (
                     <LoadingCircle />
                  ) : (
                     (popularPostsByViews.length < 15
                        ? popularPostsByViews
                        : MostPopularArticles
                     ).map((article: SliderItemType) =>
                        isPostLoading ? (
                           <Skeleton />
                        ) : (
                           <RelatedArticleTemplate
                              title={article.title}
                              createdAt={dateUTC(article.createdAt).slice(
                                 0,
                                 10
                              )}
                              user={article.user}
                              tags={article.tags}
                              _id={article._id}
                              key={article._id}
                              text={cutText(article.text, 150)}
                           />
                        )
                     )
                  )}
               </div>
            </div>
         </div>
         <div className="container-slider-home">
            <Title title="Other popular articles" fontSize="1.7rem" />
            <div className="slider-home">
               {isPostLoading ? (
                  <LoadingCircle />
               ) : (
                  <Slider
                     items={
                        popularPostsByViews.length < 15
                           ? popularPostsByViews
                           : otherPopularArticles
                     }
                     slidesPerView={'auto'}
                     spaceBetween={40}
                     centeredSlides={window.innerWidth < 1000 ? true : false}
                     loop={window.innerWidth < 1000 ? true : false}
                     navigation={window.innerWidth <= 700 ? false : true}
                  />
               )}
            </div>
         </div>
         <PageScrollUp />
      </div>
   )
}

export default Home

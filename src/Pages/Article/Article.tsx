import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { blogsArray, BlogsProps, getBlogsObject } from "../../components/ArticlesComponent/ArticlesArray"
import RelatedArticleTemplate from "../../components/ArticlesComponent/RelatedArticleTemplate"
import Title from "../../components/Title/Title"
import './Article.scss'

type ArticlePageProps = {
  [id:number]: BlogsProps
}

const Article = () => {

  const {id} = useParams()

  const articlePage:ArticlePageProps = getBlogsObject(blogsArray)

  const currentArticle = articlePage[parseInt(id!)]

  const filteredArticlesByChapter = blogsArray.filter(
    article => article.chapter === currentArticle.chapter 
    && Math.abs(currentArticle.id - article.id) <= 50
    && article.id !== currentArticle.id
    ).sort((a:any, b:any) => b - a)

  const maxQtyRelatedArticles = () => filteredArticlesByChapter.length > 10 ? filteredArticlesByChapter.length = 10 : filteredArticlesByChapter

  maxQtyRelatedArticles()

  return (
    <>
      <div className="selected-article">
        <Title title={`${currentArticle.title}`} fontSize={'3.25rem'} justifyContent={'flex-start'}/>
        <div className="author-block">
            <img src={currentArticle.authorPhoto} alt={currentArticle.nickname} />
            <h3>{currentArticle.nickname}</h3>
            <h4>{currentArticle.author}</h4>
            <time>{currentArticle.date}</time>
            <div>Chapter: <i>{currentArticle.chapter}</i></div>
        </div>
        <div className="img-of-main-article-plus-related-articles">
            {window.innerWidth > 1850 ? <Title title={'Related Articles'} justifyContent={'flex-end'} fontSize={'3.6rem'}/> : ''}
          <div className="container-slider-main-photo">
            <img src={currentArticle.photo} className='img'/>
            <div className="related-article-container">
              {window.innerWidth <= 1850 ? <Title title={'Related Articles'} justifyContent={'flex-start'} fontSize={'3.6rem'}/> : ''}
                <Swiper
                  spaceBetween={30}
                  slidesPerGroup={1}
                  simulateTouch= {true}
                  freeMode={true}
                  breakpoints={{
                    300: {
                      direction: "horizontal",
                      slidesPerView: 'auto',
                      slidesPerGroup: 1,
                    },
                    1850: {
                      direction: "vertical",
                      slidesPerView: 3,
                    },
                    2300: {
                      direction: "vertical",
                      slidesPerView: 4,
                    }
                  }}
                >
                  {filteredArticlesByChapter.map(article => (
                    <SwiperSlide><RelatedArticleTemplate {...article} key={article.id}/></SwiperSlide>
                  ))}
                </Swiper>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Article
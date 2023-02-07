import ArticlesList from '../../components/ArticlesComponent/ArticlesList'
import SortArticles from '../../components/SortArticles/SortArticles'
import Title from '../../components/Title/Title'
import './Articles.scss'

const Articles = () => {
   return (
      <div className="container-articles-page">
         <Title
            title="Articles"
            fontSize="2.65rem"
            justifyContent="flex-start"
         />
         <section className="container-articles-tags-section">
            <article>
               <ArticlesList />
            </article>
            <SortArticles />
         </section>
      </div>
   )
}

export default Articles

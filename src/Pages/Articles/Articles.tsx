import ArticlesList from '../../components/ArticlesComponent/ArticlesList'
import SortArticles from '../../components/SortArticles/SortArticles'
import Title from '../../components/Title/Title'
import './Articles.scss'


const Articles = () => {
  return (
    <>
        <Title title="Articles" />
        <section className="articles">
            <SortArticles />
            <article>
                <ArticlesList />
            </article>
        </section>
    </>
  )
}

export default Articles
import './Main.scss'
import Title from '../components/Title/Title'
import Blogs from '../components/Blogs/Blogs'
import SortArticles from '../components/SortArticles/SortArticles'
type Props = {}
const Main = (props: Props) => {
   return (
      <>
         <Title title="Articles" />
         <section className="articles">
            <SortArticles />
            <article>
               <Blogs />
            </article>
         </section>
      </>
   )
}
export default Main

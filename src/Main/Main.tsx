import './Main.scss'
import Title from '../components/Title/Title'
import Blogs from '../components/Blogs/Blogs'
type Props = {}
const Main = (props: Props) => {
   return (
      <>
         <Title title="Articles" />
         <article>
            <Blogs />
         </article>
      </>
   )
}
export default Main

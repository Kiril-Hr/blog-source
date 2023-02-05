import { Link } from 'react-router-dom'
import { cutText } from '../../utils/functions'
import './ArticleTemplate.scss'
type Props = {
   id?: number
   photo?: string
   title?: string
   description?: string
   date?: string
   author?: string
   nickname?: string
   authorPhoto?: string
   chapter?: string
   tags?: {
      [key: string]: string
   }
}
const ArticleTemplate = ({
   id,
   photo,
   title,
   description,
   date,
   author,
   nickname,
   authorPhoto,
   chapter,
   tags,
}: Props) => {
   return (
      <>
         <div className="article">
            <p className="chapter">{chapter}</p>
            <img src={photo} alt="article" className="img" />
            <div className="descr">
               <Link to={`/article/${id}`}>{title}</Link>
               <p>{cutText(description!, 200)}</p>
            </div>
            <div className="date-author-name-link">
               <time dateTime={date}>{date}</time>
               <div className="author-name-link">
                  <h4>{author}</h4>
                  <a href="../../public/index.html">{nickname}</a>
                  <img src={authorPhoto} alt="author" />
               </div>
            </div>
         </div>
      </>
   )
}
export default ArticleTemplate

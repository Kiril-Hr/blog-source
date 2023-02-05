import './RelatedArticleTemplate.scss'
import { Link } from 'react-router-dom'

type Props = {
   id?: number
   photo?: string
   title?: string
   description?: string
   date?: string
   author?: string
   nickname?: string
   authorPhoto?: string
   tags?: string
}

const RelatedArticleTemplate = ({
   id,
   photo,
   title,
   description,
   date,
   author,
   nickname,
   authorPhoto,
   tags,
}: Props) => {
   return (
      <>
         <div className="article-related">
            <img src={photo} alt="article" className="img" />
            <div className="descr">
               <Link to={`/article/${id}`}>{title}</Link>
               <p>{description}</p>
            </div>
            <div className="date-author-name-link">
               <div className="author-name-link">
                  <h4>{author}</h4>
                  <div className="logo-name">
                     <a href="../../public/index.html">{nickname}</a>
                     <img src={authorPhoto} alt="author" />
                  </div>
               </div>
               <time dateTime={date}>{date}</time>
            </div>
         </div>
      </>
   )
}

export default RelatedArticleTemplate

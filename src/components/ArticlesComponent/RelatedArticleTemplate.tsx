import './RelatedArticleTemplate.scss'
import { Link } from 'react-router-dom'
import { SliderItemType } from '../../types'

type Props = SliderItemType

const RelatedArticleTemplate = ({
   _id,
   imageUrl,
   title,
   text,
   createdAt,
   user,
   userPhoto,
}: Props) => {
   return (
      <>
         <div className="article-related">
            <img src={imageUrl} alt="article" className="img" />
            <div className="descr">
               <Link to={`/article/${_id}`}>{title}</Link>
               <p>{text}</p>
            </div>
            <div className="date-author-name-link">
               <div className="author-name-link">
                  <h4>{user}</h4>
                  <div className="logo-name">
                     <img src={userPhoto} alt="author" />
                  </div>
               </div>
               <time dateTime={createdAt}>{createdAt}</time>
            </div>
         </div>
      </>
   )
}

export default RelatedArticleTemplate

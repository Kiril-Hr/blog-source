import './RelatedArticleTemplate.scss'
import { Link } from 'react-router-dom'
import { SliderItemType } from '../../utils/types'
import UserInfo from '../UserInfo/UserInfo'

type Props = SliderItemType

const RelatedArticleTemplate = ({
   _id,
   imageUrl,
   title,
   text,
   createdAt,
   user,
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
                  <UserInfo {...user} />
               </div>
               <time dateTime={createdAt}>{createdAt}</time>
            </div>
         </div>
      </>
   )
}

export default RelatedArticleTemplate

import classes from './RelatedArticleTemplate.module.scss'
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
         <div className={classes.articleRelated}>
            <img src={imageUrl} alt="article" className={classes.img} />
            <div className={classes.descr}>
               <Link to={`/article/${_id}`}>{title}</Link>
               <p>{text}</p>
            </div>
            <div className={classes.dateAuthorNameLink}>
               <div className={classes.authorNameLink}>
                  <UserInfo {...user} />
               </div>
               <time dateTime={createdAt}>{createdAt}</time>
            </div>
         </div>
      </>
   )
}

export default RelatedArticleTemplate

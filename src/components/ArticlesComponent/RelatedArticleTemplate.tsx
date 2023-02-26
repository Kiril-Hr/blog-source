import classes from './RelatedArticleTemplate.module.scss'
import { NavLink } from 'react-router-dom'
import { SliderItemType } from '../../utils/types'
import UserInfo from '../UserInfo/UserInfo'
import { dateUTC } from '../../utils/functions'

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
               <NavLink to={`/article/${_id}`}>{title}</NavLink>
               <p>{text}</p>
            </div>
            <div className={classes.dateAuthorNameLink}>
               <div className={classes.authorNameLink}>
                  <UserInfo {...user} />
               </div>
               <time dateTime={dateUTC(createdAt)}>{dateUTC(createdAt)}</time>
            </div>
         </div>
      </>
   )
}

export default RelatedArticleTemplate

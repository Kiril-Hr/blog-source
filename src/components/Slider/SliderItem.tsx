import { Link } from 'react-router-dom'
import { cutText, dateUTC } from '../../utils/functions'
import { SliderItemType } from '../../utils/types'
import TagsBlock from '../Tags/TagsBlock'
import UserInfo from '../UserInfo/UserInfo'
import classes from './SliderItem.module.scss'

export type Props = SliderItemType

const SliderItem = ({
   _id,
   imageUrl,
   title,
   text,
   createdAt,
   user,
   tags,
   viewsCount,
}: Props) => {
   const tagsFilter = tags
   if (tagsFilter!.length > 5) tagsFilter!.length = 5

   return (
      <div className={classes.articleHome} draggable={false}>
         <div className={classes.tagsContainer}>
            <TagsBlock tags={tagsFilter!} />
         </div>
         <img
            src={imageUrl ? `${process.env.REACT_APP_API_URL}${imageUrl}` : ''}
            alt="article"
            className={classes.img}
         />
         <div className={classes.descrHome}>
            <Link to={`/article/${_id}`}>{cutText(title!, 50)}</Link>
            <p>
               {window.innerWidth < 500
                  ? cutText(text!, 80)
                  : cutText(text!, 130)}
            </p>
         </div>
         <div className={classes.dateAuthorNameLinkHome}>
            <div className={classes.dateViews}>
               <time dateTime={dateUTC(createdAt)}>
                  {dateUTC(createdAt)?.slice(0, 10).replace('T', ' ')}
               </time>
               <p className={classes.views}>
                  <svg
                     className={classes.svg}
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  {viewsCount}
               </p>
            </div>
            <div className={classes.authorNameLinkHome}>
               <UserInfo {...user} />
            </div>
         </div>
      </div>
   )
}

export default SliderItem

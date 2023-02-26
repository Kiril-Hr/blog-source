import { Link } from 'react-router-dom'
import { SliderItemType } from '../../utils/types'
import { cutText, dateUTC, removeSymbols } from '../../utils/functions'
import UserInfo from '../UserInfo/UserInfo'
import classes from './ArticleTemplate.module.scss'

type Props = SliderItemType

const ArticleTemplate = ({
   _id,
   imageUrl,
   title,
   text,
   createdAt,
   user,
   tags,
   viewsCount,
   commentsCount,
}: Props) => {
   return (
      <>
         <div className={classes.article}>
            <img src={imageUrl} alt="article" className={classes.img} />
            <div className={classes.textContainer}>
               <div className={classes.descr}>
                  <Link to={`/article/${_id}`}>{title}</Link>
                  <p>
                     {window.innerWidth > 1000
                        ? cutText(removeSymbols(text!), 400)
                        : window.innerWidth <= 1000 && window.innerWidth > 500
                        ? cutText(removeSymbols(text!), 300)
                        : window.innerWidth < 500
                        ? cutText(removeSymbols(text!), 150)
                        : cutText(removeSymbols(text!), 100)}
                  </p>
               </div>
               <div className={classes.dateAuthorNameLink}>
                  <div className={classes.dateViewsComments}>
                     <time dateTime={dateUTC(createdAt)}>
                        {dateUTC(createdAt)}
                     </time>
                     <div className={classes.viewsComments}>
                        <p className={classes.views}>
                           <svg
                              className={classes.viewsSvg}
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                           </svg>
                           {viewsCount}
                        </p>
                        <p className={classes.commentsCount}>
                           <svg
                              className={classes.commentsImg}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 122.88 113.94"
                           >
                              <path d="M3.77,0H119.11a3.79,3.79,0,0,1,3.77,3.77V80.94a3.79,3.79,0,0,1-3.77,3.78H61.44l-29.1,21.62c-9.61,9.13-16.08,11.45-15.15-1V84.72H3.77A3.79,3.79,0,0,1,0,80.94V3.77A3.79,3.79,0,0,1,3.77,0ZM62.92,34.34a7.12,7.12,0,1,1-7.12,7.11,7.11,7.11,0,0,1,7.12-7.11Zm27.19,0A7.12,7.12,0,1,1,83,41.45a7.11,7.11,0,0,1,7.11-7.11Zm-54.39,0a7.12,7.12,0,1,1-7.11,7.11,7.11,7.11,0,0,1,7.11-7.11Z" />
                           </svg>
                           {commentsCount}
                        </p>
                     </div>
                  </div>

                  <div className={classes.tags}>
                     {tags?.map((tag: string, i: number) => (
                        <p className={classes.tag} key={`${i}`} id="tag">
                           {window.innerWidth < 700 && tag.length > 9
                              ? cutText(tag, 9)
                              : tag}
                        </p>
                     ))}
                  </div>
                  <div className={classes.authorNameLink}>
                     <UserInfo {...user} />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default ArticleTemplate

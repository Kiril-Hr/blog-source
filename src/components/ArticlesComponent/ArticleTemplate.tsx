import { Link } from 'react-router-dom'
import { SliderItemType } from '../../utils/types'
import { cutText } from '../../utils/functions'
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
}: Props) => {
   return (
      <>
         <div className={classes.article}>
            <img src={imageUrl} alt="article" className={classes.img} />
            <div className={classes.textContainer}>
               <div className={classes.descr}>
                  <Link to={`/article/${_id}`}>{title}</Link>
                  <p>
                     {cutText(text!, 400).replace(
                        /./gi,
                        (a: any, b: any, c: any) => {
                           return a === '*' || a === '#' ? '' : a
                        }
                     )}
                  </p>
               </div>
               <div className={classes.dateAuthorNameLink}>
                  <div className={classes.dateViews}>
                     <time dateTime={createdAt}>{createdAt}</time>
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

                  <div className={classes.tags}>
                     {tags.map((tag: string, i: number) => (
                        <p className={classes.tag} key={i}>
                           {tag}
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

import { Link } from 'react-router-dom'
import { SliderItemType } from '../../types'
import { cutText } from '../../utils/functions'
import UserInfo from '../UserInfo/UserInfo'
import './ArticleTemplate.scss'

type Props = SliderItemType

const ArticleTemplate = ({
   _id,
   photo,
   title,
   text,
   createdAt,
   user,
   tags,
   viewsCount,
}: Props) => {
   return (
      <>
         <div className="article">
            <img src={photo} alt="article" className="img" />
            <div className="text-container">
               <div className="descr">
                  <Link to={`/article/${_id}`}>{title}</Link>
                  <p>{cutText(text!, 500)}</p>
               </div>
               <div className="date-author-name-link">
                  <div className="date-views">
                     <time dateTime={createdAt}>{createdAt}</time>
                     <p className="views">
                        <svg
                           id="svg"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                        </svg>
                        {viewsCount}
                     </p>
                  </div>

                  <div className="tags">
                     {tags.map((tag: string, i: number) => (
                        <p className="tag" key={i}>
                           {tag}
                        </p>
                     ))}
                  </div>

                  <UserInfo {...user} />
               </div>
            </div>
         </div>
      </>
   )
}
export default ArticleTemplate

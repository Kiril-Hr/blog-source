import { Link } from 'react-router-dom'
import { cutText } from '../../utils/functions'
import { SliderItemType } from '../../types'
import './SliderItem.scss'

export type Props = SliderItemType

const SliderItem = ({
   _id,
   imageUrl,
   title,
   text,
   createdAt,
   user,
   userPhoto,
   tags,
}: Props) => {
   return (
      <div className="article-home" draggable={false}>
         <p className="tags-home">{tags}</p>
         <img src={imageUrl} alt="article" className="img" />
         <div className="descr-home">
            <Link to={`/article/${_id}`}>{cutText(title!, 50)}</Link>
            <p>{text}</p>
         </div>
         <div className="date-author-name-link-home">
            <time dateTime="">{createdAt}</time>
            <div className="author-name-link-home">
               <h4>{user}</h4>
               <img src={userPhoto} alt="author" />
            </div>
         </div>
      </div>
   )
}

export default SliderItem

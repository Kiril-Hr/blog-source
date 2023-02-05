import { Link } from 'react-router-dom'
import { cutText } from '../../utils/functions'
import { SliderItemType } from '../../types'
import './SliderItem.scss'

export type Props = SliderItemType

const SliderItem = ({
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
      <div className="article-home" draggable={false}>
         <p className="tags-home">{tags}</p>
         <img src={photo} alt="article" className="img" />
         <div className="descr-home">
            <Link to={`/article/${id}`}>{cutText(title!, 50)}</Link>
            <p>{description}</p>
         </div>
         <div className="date-author-name-link-home">
            <time dateTime="">{date}</time>
            <div className="author-name-link-home">
               <h4>{author}</h4>
               <a href="../../public/index.html">{nickname}</a>
               <img src={authorPhoto} alt="author" />
            </div>
         </div>
      </div>
   )
}

export default SliderItem

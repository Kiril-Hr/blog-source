import { SliderItemType } from '../../types'
import './SliderItem.scss'

export type Props = SliderItemType

const SliderItem = ({ photo, title, description, date, author, nickname, authorPhoto, chapter }: Props) => {
  return (
    <div className="article-home" draggable={false}>
            <p className="chapter-home">{chapter}</p>
            <img src={photo} alt="article" className="img" />
            <div className="descr-home">
               <a href="../../public/index.html">{title}</a>
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
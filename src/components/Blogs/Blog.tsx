import './Blogs.scss'
type Props = {
   key: number
   photo: string
   title: string
   description: string
   date: string
   author: string
   nickname: string
   authorPhoto: string
   chapter: string
}
const Blog = (props: Props) => {
   return (
      <>
         <div className="article">
            <p className="chapter">{props.chapter}</p>
            <img src={props.photo} alt="article-photo" className="img" />
            <div className="descr">
               <a>{props.title}</a>
               <p>{props.description}</p>
            </div>
            <div className="date-author-name-link">
               <time dateTime="">{props.date}</time>
               <div className="author-name-link">
                  <h4>{props.author}</h4>
                  <a href="#">{props.nickname}</a>
                  <img src={props.authorPhoto} alt="author-photo" />
               </div>
            </div>
         </div>
      </>
   )
}
export default Blog

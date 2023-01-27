import './ArticleTemplate.scss'
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
const ArticleTemplate = (props: Props) => {
   return (
      <>
         <div className="article">
            <p className="chapter">{props.chapter}</p>
            <img src={props.photo} alt="article" className="img" />
            <div className="descr">
               <a href="../../public/index.html">{props.title}</a>
               <p>{props.description}</p>
            </div>
            <div className="date-author-name-link">
               <time dateTime="">{props.date}</time>
               <div className="author-name-link">
                  <h4>{props.author}</h4>
                  <a href="../../public/index.html">{props.nickname}</a>
                  <img src={props.authorPhoto} alt="author" />
               </div>
            </div>
         </div>
      </>
   )
}
export default ArticleTemplate

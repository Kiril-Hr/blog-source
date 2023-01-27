import './ArticleTemplate.scss'
import ArticleTemplate from './ArticleTemplate'
import { blogsArray } from './ArticlesArray'
type Props = {}
type BlogsProps = {
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
const Blogs = (props: Props) => {
   return (
      <>
         {blogsArray.map(
            ({
               key,
               photo,
               title,
               description,
               date,
               author,
               nickname,
               authorPhoto,
               chapter,
            }: BlogsProps) => (
               <ArticleTemplate
                  chapter={chapter}
                  photo={photo}
                  title={title}
                  description={description}
                  date={date}
                  author={author}
                  nickname={nickname}
                  authorPhoto={authorPhoto}
                  key={key}
               />
            )
         )}
      </>
   )
}
export default Blogs

import './ArticleTemplate.scss'
import ArticleTemplate from './ArticleTemplate'
import { blogsArray } from '../../shared/ArticlesArray'

type BlogsProps = {
   id: number
   photo: string
   title: string
   description: string
   date: string
   author: string
   nickname: string
   authorPhoto: string
   chapter: string
}
const ArticlesList = () => {
   return (
      <>
         {blogsArray.map(
            ({
               id,
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
                  key={id}
                  id={id}
               />
            )
         )}
      </>
   )
}
export default ArticlesList

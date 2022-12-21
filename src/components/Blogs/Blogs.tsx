import './Blogs.scss'
import Blog from './Blog'
import blogsArray from './BlogsArray'
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
            }: BlogsProps) => (
               <Blog
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

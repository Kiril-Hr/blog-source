import ArticleTemplate from './ArticleTemplate'
import { blogsArray } from '../../utils/ArticlesArray'
import { SliderItemType } from '../../types'
import Skeleton from './Skeleton'

type BlogsProps = SliderItemType

type articleProps = {
   isPostLoading: any
   posts: any
}

const ArticlesList = ({ isPostLoading, posts }: articleProps) => {
   return (
      <>
         {(isPostLoading ? blogsArray : posts).map((obj: BlogsProps) =>
            isPostLoading ? (
               <Skeleton />
            ) : (
               <ArticleTemplate
                  title={obj.title}
                  imageUrl={
                     obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''
                  }
                  text={obj.text}
                  createdAt={obj.createdAt?.slice(0, 10)}
                  key={obj._id}
                  _id={obj._id}
                  viewsCount={obj.viewsCount}
                  user={obj.user}
                  tags={obj.tags.length > 3 ? obj.tags.slice(0, 3) : obj.tags}
               />
            )
         )}
      </>
   )
}
export default ArticlesList

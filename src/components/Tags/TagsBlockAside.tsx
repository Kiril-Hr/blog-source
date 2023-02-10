import LoadingCircle from '../LoadingCircle/LoadingCircle'
import Title from '../Title/Title'
import './TagsBlockAside.scss'

type Tags = {
   tags: Array<string>
   isLoading: any
}

const TagsBlockAside = ({ tags, isLoading }: Tags) => {
   if (isLoading) {
      return <LoadingCircle />
   }

   return (
      <>
         <div className="wrapper-sort-btn">
            <Title
               fontSize="1.6rem"
               justifyContent="flex-start"
               title="#Tags"
            />
            <div className="container-tags">
               {tags.map((tag: any, i: number) => (
                  <button key={i}>{tag}</button>
               ))}
            </div>
         </div>
      </>
   )
}
export default TagsBlockAside

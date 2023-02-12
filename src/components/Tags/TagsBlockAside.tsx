import LoadingCircle from '../LoadingCircle/LoadingCircle'

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
         {tags.map((tag: any, i: number) => (
            <button key={i}>{tag}</button>
         ))}
      </>
   )
}
export default TagsBlockAside

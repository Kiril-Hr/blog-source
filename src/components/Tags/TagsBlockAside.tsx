import LoadingCircle from '../UI/LoadingCircle/LoadingCircle'

type Tags = {
   tags: Array<string>
   isLoading?: boolean
   filterPostsByTag?: React.ChangeEvent<HTMLButtonElement> | any
}

const TagsBlockAside = ({
   tags,
   isLoading = false,
   filterPostsByTag,
}: Tags) => {
   const filteredTags = tags.reduce((obj: any, tag: string) => {
      const innerTag = tag.trim().toLowerCase()
      if (!obj[innerTag]) {
         obj[innerTag] = innerTag
      }
      return obj
   }, {})

   if (isLoading) {
      return <LoadingCircle />
   }

   return (
      <>
         {Object.values(filteredTags).map((tag: any, i: number) => (
            <button key={i} value={tag} onClick={filterPostsByTag}>
               {tag}
            </button>
         ))}
      </>
   )
}
export default TagsBlockAside

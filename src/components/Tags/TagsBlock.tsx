type Props = {
   tags: Array<string>
}

const TagsBlock = ({ tags }: Props) => {
   return (
      <>
         {tags.map((tag: any, i: number) => (
            <p key={i} className="tag-home">
               {tag}
            </p>
         ))}
      </>
   )
}
export default TagsBlock

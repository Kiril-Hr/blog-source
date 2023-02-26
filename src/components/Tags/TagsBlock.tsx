import { cutText } from '../../utils/functions'

type Props = {
   tags: Array<string>
}

const TagsBlock = ({ tags }: Props) => {
   return (
      <>
         {tags.map((tag: string, i: number) => (
            <p key={i} className="tag-home">
               {window.innerWidth < 500 && tag.length > 7
                  ? cutText(tag, 7)
                  : tag}
            </p>
         ))}
      </>
   )
}
export default TagsBlock

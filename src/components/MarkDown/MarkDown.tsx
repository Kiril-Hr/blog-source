import ReactMarkdown from 'react-markdown'
import classes from './MarkDown.module.scss'

type Props = {
   text: string
}
const MarkDown = ({ text }: Props) => {
   return (
      <div className={classes.text}>
         <ReactMarkdown>{text}</ReactMarkdown>
      </div>
   )
}
export default MarkDown

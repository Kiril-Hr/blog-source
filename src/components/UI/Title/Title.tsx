import './Title.scss'
type Props = {
   title: string
   fontSize?: string
   justifyContent?: string
   func?: () => void
}
const Title = ({ title, fontSize, justifyContent, func }: Props) => {
   return (
      <>
         <h2
            onClick={func}
            className={'title'}
            style={{
               fontSize: `${fontSize}`,
               justifyContent: `${justifyContent}`,
            }}
         >
            {title}
         </h2>
      </>
   )
}
export default Title

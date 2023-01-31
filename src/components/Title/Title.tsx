import './Title.scss'
type Props = {
   title: string
   fontSize?: string
   justifyContent?: string
}
const Title = ({ title, fontSize, justifyContent }: Props) => {
   return (
      <>
         <h2
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

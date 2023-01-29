import './Title.scss'
type Props = {
   title: string
   desc?: string
   fontSize?: string
   justifyContent?: string
}
const Title = ({title, desc, fontSize, justifyContent}: Props) => {
   return (
      <>
         <h2 className={'title'} style={{fontSize: `${fontSize}`, justifyContent:`${justifyContent}`}}>{title}</h2>
         <p>{desc}</p>
      </>
   )
}
export default Title

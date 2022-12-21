import './Title.scss'
type Props = {
   title: string
}
const Title = (props: Props) => {
   return (
      <>
         <h2 className="title">{props.title}</h2>
      </>
   )
}
export default Title

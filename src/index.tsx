import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
   title: string | number
}

const Title = (props: TitleProps) => <h1>Hello {props.title}</h1>
const Content = () => {
   return (
      <>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            abpossimus temporibus repellendus quibusdam! Harum maxime vitae
            optio sequi perferendis! Fugiat pariatur tenetur porro? Modi dolore
            expedita porro cupiditate unde.
         </p>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            abpossimus temporibus repellendus quibusdam! Harum maxime vitae
            optio sequi perferendis! Fugiat pariatur tenetur porro? Modi dolore
            expedita porro cupiditate unde.
         </p>
      </>
   )
}
const App = () => {
   return (
      <>
         <Title title="React.js" />
         <Title title={12} />
         <Content />
      </>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{<App />}</React.StrictMode>)

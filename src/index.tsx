import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
   title: string
   text?: string
}

const Title = ({ title, text = 'test' }: TitleProps) => (
   <h1>
      {text} {title}
   </h1>
)
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
         <Title title="React.js" text="Hello" />
         <Title title="React.js" text="Hi" />
         <Title title="React.js" text="Bye-bye" />
         <Title title="Bla-bla" />
         <Content />
      </>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{<App />}</React.StrictMode>)

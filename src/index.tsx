import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'

type TitleProps = {
   title: string
   text?: string
}

const Title = ({ title, text = 'test' }: TitleProps) => (
   <h1>
      {text} {title}
   </h1>
)

const App = () => {
   return (
      <>
         <Title title="React.js" text="Hello" />
         <Content h1="About something" h2="About something else" />
      </>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{<App />}</React.StrictMode>)

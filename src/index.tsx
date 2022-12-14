import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Content, { test } from './Content'

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
         <Content />
      </>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{<App />}</React.StrictMode>)

import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => <h1>Hello React.js</h1>
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
         <Title />
         <Content />
      </>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{<App />}</React.StrictMode>)

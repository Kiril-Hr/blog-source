import React from 'react'
import ReactDOM from 'react-dom/client'

//JSX
// const h1 = <h1>Hello world</h1>
// Without JSX
// const h1 = React.createElement(
//    'h1',
//    { id: 'Title', className: 'text' },
//    'Hello React'
// )

// function App() {
//    return (
//       <div>
//          <h1>Hello React.js</h1>
//          <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab
//             possimus temporibus repellendus quibusdam! Harum maxime vitae optio
//             sequi perferendis! Fugiat pariatur tenetur porro? Modi dolore
//             expedita porro cupiditate unde.
//          </p>
//       </div>
//    )
// }
const Title = () => <h1>Hello React.js</h1>
// const Content = () => {
//    return (
//       <div>
//          <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab
//             possimus temporibus repellendus quibusdam! Harum maxime vitae optio
//             sequi perferendis! Fugiat pariatur tenetur porro? Modi dolore
//             expedita porro cupiditate unde.
//          </p>
//          <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab
//             possimus temporibus repellendus quibusdam! Harum maxime vitae optio
//             sequi perferendis! Fugiat pariatur tenetur porro? Modi dolore
//             expedita porro cupiditate unde.
//          </p>
//       </div>
//    )
// }
// const Content = () => {
//    return (
//       <React.Fragment>
//          <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
//             abpossimus temporibus repellendus quibusdam! Harum maxime vitae
//             optio sequi perferendis! Fugiat pariatur tenetur porro? Modi dolore
//             expedita porro cupiditate unde.
//          </p>
//          <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
//             abpossimus temporibus repellendus quibusdam! Harum maxime vitae
//             optio sequi perferendis! Fugiat pariatur tenetur porro? Modi dolore
//             expedita porro cupiditate unde.
//          </p>
//       </React.Fragment>
//    )
// }
// const Content = () => {
//    return (
//       <>
//          <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
//             abpossimus temporibus repellendus quibusdam! Harum maxime vitae
//             optio sequi perferendis! Fugiat pariatur tenetur porro? Modi dolore
//             expedita porro cupiditate unde.
//          </p>
//          <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
//             abpossimus temporibus repellendus quibusdam! Harum maxime vitae
//             optio sequi perferendis! Fugiat pariatur tenetur porro? Modi dolore
//             expedita porro cupiditate unde.
//          </p>
//       </>
//    )
// }
// const App = () => {
//    return (
//       <>
//          <Title />
//          <Content />
//       </>
//    )
// }

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{/* <App /> */}</React.StrictMode>)

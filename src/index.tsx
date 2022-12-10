import React from 'react'
import ReactDOM from 'react-dom/client'

//JSX
// const h1 = <h1>Hello world</h1>
// Without JSX
const h1 = React.createElement(
   'h1',
   { id: 'Title', className: 'text' },
   'Hello React'
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{h1}</React.StrictMode>)

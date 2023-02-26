import { useState, useEffect } from 'react'

const ThemeSwitcher = () => {
   const [theme, setTheme] = useState('light')

   const toggleTheme = () => {
      setTheme((prevstate) => (prevstate === 'light' ? 'dark' : 'light'))
      localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
   }

   useEffect(() => {
      const root = document.documentElement
      root.classList.remove(theme === 'light' ? 'dark' : 'light')
      root.classList.add(theme)
   }, [theme])

   useEffect(() => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
         setTheme(savedTheme)
      }
   }, [theme])

   return (
      <button onClick={toggleTheme}>
         <span
            style={
               theme === 'light'
                  ? { background: '#27AC96' }
                  : { background: '#F2B35B' }
            }
         />{' '}
         Theme
      </button>
   )
}
export default ThemeSwitcher

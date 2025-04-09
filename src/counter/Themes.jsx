import React, {  createContext, useContext, useEffect, useState } from 'react'

const themeContexts = createContext();
export const Themes = ({children}) => {
  const [theme, setTheme] = useState(()=> {
    return localStorage.getItem('theme') || 'light';
  })

  const toggleTheme = () => {
    setTheme(prevTheme => {
        const Theme = prevTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme',Theme)
        return Theme
    })
  }

  useEffect(()=> {
    document.documentElement.setAttribute('data-theme', theme)
  },[theme])
  return (
   <themeContexts.Provider value={{theme, toggleTheme}}>
      {children}
   </themeContexts.Provider>
  )
}

export default useThemes = () => {
    return useContext(themeContexts);
}

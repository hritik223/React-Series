import { useState, useEffect } from "react";
import './App.css'
import { ThemeProvider } from './Contexts/theme'
import Themebtn from "./component/Themebtn";
import Card from "./component/card";

function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  //change Theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
                <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
                <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App

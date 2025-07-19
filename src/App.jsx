import './App.css'
import { Button } from './components/ui/button'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'
import Navbar from './page/Navbar/Navbar'
import Home from './page/Home/Home'

function App() {
  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Home/>
     </ThemeProvider>
  )
}

export default App

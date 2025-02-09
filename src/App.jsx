import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Products from './component/Products'
import AppInfo from './component/AppInfo'
import FallMatters from './component/FallMatters'
import VisciousCycle from './component/VisciousCycle'
import Sponsers from './component/Sponsers'
import Final from './component/Final'
import { Footer } from './component/Footer'
import { Speech } from './component/Speech'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' w-full h-[100vh] '>
      <Navbar />
      <Hero />
      <Products />
      <AppInfo />
      <FallMatters />
      <VisciousCycle />
      <Sponsers />
      <Speech></Speech>
      <Final />
      <Footer></Footer>
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './background.css'
import Background from './Background'

function App() {


  return (
    <>
      <Background/>
      <div className="relative z-10">
        <Navbar/>
        <Outlet />
      </div>
    </>
  )
}

export default App

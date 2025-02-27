import { Outlet } from "react-router-dom"
import { Navbar } from "./components/navigation/Navbar"
import { Footer } from "./components/footer/Footer"
import { ToTop } from "./toTop"
import './index.css'



function App() {
  return (
    <section className="AppMainSec">
      <div className="NavbarPostioningDiv">
        <ToTop/>
      <Navbar/>
      </div>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </section>
  )
}

export default App

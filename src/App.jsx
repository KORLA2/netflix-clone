import { Header } from "./components"
import { Outlet } from "react-router-dom"
function App() {
 
  return (

   <div className="overflow-x-hidden">
    <Header/>
    <Outlet/>
  
   </div>

  )
}

export default App

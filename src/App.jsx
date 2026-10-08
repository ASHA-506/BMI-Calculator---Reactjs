import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import BMICalculator from "./components/BMICalculator"

function App() {

  return (
    <>
    <Header/>
<Routes>
  <Route path="/" element={<BMICalculator/>}/> 
</Routes>

    <Footer/>
    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import PropertyDetails from "./pages/PropertyDetails.jsx"
import AddPropertyForm from "./pages/AddPropertyForm.jsx"
import About from "./pages/About.jsx"

function App() {
 const [houses, setHouses] = useState([])
 const [loading, setLoading] = useState(true)

 useEffect(()=>{
  fetch("http://localhost:3001/properties")
  .then((res)=> res.json())
  .then((data)=>{
    setHouses(data)
    setLoading(false)
  })
  .catch((err)=>{
    console.error("Error fetching data:", err)
    setLoading(false)
  })
 }, [])


  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home loading={loading} houses= {houses} />} />
        <Route path="/pages/:id" element={<PropertyDetails loading={loading} houses={houses} />} />
        <Route path="/add" element={<AddPropertyForm houses={houses} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

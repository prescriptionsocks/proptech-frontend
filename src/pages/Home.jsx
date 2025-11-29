import { Link } from "react-router-dom"
import PropertyList from "../components/PropertyList"
export default function Home({loading, houses}) {
  
  if (loading) {return <p>Loading...</p>}
  return <>
  <main>
<PropertyList houses={houses}/>
  </main>
  
  
  
  </>
}

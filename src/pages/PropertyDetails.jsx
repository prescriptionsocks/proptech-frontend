import { useParams } from "react-router-dom"

export default function PropertyDetails({houses, loading }) {
  
   
  // get ide from clicked link
  const { id } = useParams()

  //only show data related to the id
const property = houses.find(h => Number(h.id) === Number(id));


  return <>
  <h1>{property.title}</h1>
  <p>{property.rent}</p>
  <p>{property.city}</p>
  <p>{property.estate}</p>
  <p>{property.description}</p>
  
  </> 
}

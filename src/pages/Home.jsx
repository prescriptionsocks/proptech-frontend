import { Link } from "react-router-dom"
import PropertyCard from "../components/PropertyCard"

export default function Home({loading, houses}) {
  
  if (loading) {return <p>Loading...</p>}
  return <>
  <ul>
    {houses.map((house)=>(
      <li key = {house.id}>
        <h3>{house.title}</h3>
        <p>City: {house.city}</p>
        <p>Estate: {house.estate}</p>
        <p>Rent: KES {house.price}</p>
        <p>Bedrooms: {house.bedrooms}</p>
        <p>Bathrooms: {house.bathrooms}</p>
        <p>Parking spaces: {house.parking}</p>
        <Link to={`/pages/${house.id}`}> Details</Link>

        <PropertyCard  house={house}/>
      </li>
    ))}
  </ul>
  
  </>
}

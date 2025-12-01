import { useParams } from "react-router-dom"
import PropertyCard from "../components/PropertyCard";
import "./PropertyDetails.css"

export default function PropertyDetails({houses, loading }) {
  
   
  // get ide from clicked link
  const { id } = useParams()

    if (loading) return <p>Loading...</p>;

  //only show data related to the id
const property = houses.find(h => Number(h.id) === Number(id));


  return <>
  <main className="property-details-page">
    <section>
      <div className="section-padding">
        <div className="details-page-flex">
          <PropertyCard house={property}/>
          <div className="details-features-wrapper">
            <p className="details-feature">{property.bedrooms}</p>
            <p className="details-feature">{property.bedrooms}</p>
            <p className="details-feature">{property.bedrooms}</p>
            <p className="details-feature">{property.bedrooms}</p>

          </div>
          <div className="details-text-wrapper">
            <p>{property.description}</p>

          </div>

        </div>

      </div>
    </section>
    
  </main>
  
  </> 
}

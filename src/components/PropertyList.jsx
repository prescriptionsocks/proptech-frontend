import PropertyCard from "./PropertyCard";

export default function PropertyList({ houses }) {
  return (

      <section>
        <div className="section-padding">
          <ul className="card-grid">
            {houses.map((house) => (
              <PropertyCard house={house} />
            ))}
          </ul>
        </div>
      </section>
  );
}

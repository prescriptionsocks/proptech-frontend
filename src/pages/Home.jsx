import { Link } from "react-router-dom";
import PropertyList from "../components/PropertyList";
import { useState } from "react";
export default function Home({ loading, houses }) {
  const [searchTerm, setSearchTerm] = useState("");

  //filter by search
  const filteredHouses = houses.filter((house) => {
    const term = searchTerm.toLocaleLowerCase();
    return (
      house.title.toLowerCase().includes(term) ||
      house.city.toLowerCase().includes(term) ||
      house.estate.toLowerCase().includes(term)
    );
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <main style={{ marginTop: "124px" }}>
        <section>
          <div className="section-padding" style={{ paddingBottom: "0" }}>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by title, city or estate"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        <PropertyList houses={filteredHouses} />
      </main>
    </>
  );
}

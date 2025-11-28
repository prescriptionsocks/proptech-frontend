import { Link } from "react-router-dom";
import "./ContentCard.css";

export default function ContentCard({ content }) {
  return (
    <section className="section">
      <div className="section-padding">
        <div className="content-card-component">
          <div className="content-card-flex">
            <h2>{content.title}</h2>
            <p>{content.text}</p>
            <Link className="button" to="/">
              {" "}
              Browse Listings{" "}
            </Link>
          </div>
          <img className="content-card-image" src={content.image} alt="image" />
        </div>
      </div>
    </section>
  );
}

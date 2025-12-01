import { Link } from "react-router-dom";
import "./CTASection.css"

export default function CTASection({ content }) {
  return (
    <section className="cta-section">
      <div className="section-padding">
        <div className="cta-component">
          <div className="heading-wrapper">
            <p className="heading-eyebrow"> Ready to Take the Next Step </p>
            <h2> Find Your Perfect Property Today</h2>
            
          </div>
          <div className="button-group">
              <Link className="button" to="/">
                See Properties
              </Link>
              <Link className="button" to="/add">
                Add property
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}

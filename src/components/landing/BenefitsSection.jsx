import { Link } from "react-router-dom";
import "./BenefitsSection.css";

export default function BenefitsSection({ content }) {
  return (
    <section className="section">
      <div className="section-padding">
        <div className="benefits-card-component">
          <ul>
            {content.map((feature) => {
              return (
                <li className="benefits-card">
                  <h3>{feature.title}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import "./BenefitsSection.css";
import '../../App.css'

export default function BenefitsSection({ content }) {
  return (
    <section className="section">
      <div className="section-padding">
        <div className="benefits-card-component">
             <div className="heading-wrapper">
                <p className="heading-eyebrow"> Our Features</p>
                <h2> See what sets up apart</h2>



            </div>
          <ul className="benefits-card-list">
           
            {content.map((feature) => {
              return (
                <li className="benefits-card">
                  <h3>{feature.title}</h3>
                  <img className="benefits-card-bg" src={feature.bg} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

import "./PropertyCard.css";
import { Link } from "react-router-dom";

export default function PropertyCard({ house }) {
  return (
    <li key={house.id} className="property-card">
      <img src={house.image} alt="" className="property-card-image" />
      <div className="property-card-content">
        <h3>{house.title}</h3>
        <p>Ksh {house.price}</p>
        <div className="property-card-flex">
          <div className="property-card-feature">
            <svg
              className="property-card-icon"
              width="100%"
              height="100%"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.45455 0.722222C1.45455 0.323353 1.12893 0 0.727273 0C0.325615 0 0 0.323353 0 0.722222V7.94444V10.1111V12.2778C0 12.6767 0.325615 13 0.727273 13C1.12893 13 1.45455 12.6767 1.45455 12.2778V10.8333H14.5455V12.2778C14.5455 12.6767 14.8711 13 15.2727 13C15.6744 13 16 12.6767 16 12.2778V10.1111V7.94444V5.77778C16 3.78342 14.3719 2.16667 12.3636 2.16667H8C7.59833 2.16667 7.27273 2.49002 7.27273 2.88889V4.69444C7.27273 3.29839 6.13309 2.16667 4.72727 2.16667C3.32145 2.16667 2.18182 3.29839 2.18182 4.69444C2.18182 6.0905 3.32145 7.22222 4.72727 7.22222H1.45455V0.722222ZM4.72727 7.22222C6.13309 7.22222 7.27273 6.0905 7.27273 4.69444V7.22222H4.72727ZM14.5455 8.66667V9.38889H1.45455V8.66667H8H14.5455ZM14.5455 5.77778V7.22222H8.72727V3.61111H12.3636C13.5687 3.61111 14.5455 4.58116 14.5455 5.77778ZM3.63636 4.69444C3.63636 4.09613 4.12478 3.61111 4.72727 3.61111C5.32977 3.61111 5.81818 4.09613 5.81818 4.69444C5.81818 5.29273 5.32977 5.77778 4.72727 5.77778C4.12478 5.77778 3.63636 5.29273 3.63636 4.69444Z"
                fill="white"
              />
            </svg>

            <p>{house.bedrooms}</p>
          </div>
          <div className="property-card-feature">
            <svg className="property-card-icon"
              width="100%"
              height="100%"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 15.75C11.625 13.05 14.25 10.6323 14.25 7.65C14.25 4.66766 11.8995 2.25 9 2.25C6.10051 2.25 3.75 4.66766 3.75 7.65C3.75 10.6323 6.375 13.05 9 15.75Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>
              {house.estate}, {house.city}
            </p>
          </div>
        </div>
      </div>
      <Link to='/' className="property-card-link">
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="black"/>
</svg>

      </Link>
    </li>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faLightbulb,
  faPuzzlePiece,
  faTrowelBricks,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="service">
      <div className="service-text">
        <h2>Waht we do</h2>
        <h1>Our Service</h1>
      </div>
      <div className="service-items">
        <div className="service-item">
          <h1>
            <FontAwesomeIcon
              className="service-item-icon"
              icon={faPuzzlePiece}
            />{" "}
            Custom Design
          </h1>
          <p>Tailored to fit your brand's vision and style.</p>
        </div>
        <div className="service-item">
          <h1>
            <FontAwesomeIcon
              className="service-item-icon"
              icon={faTrowelBricks}
            />{" "}
            Build & Installation
          </h1>
          <p>
            High-quality construction using premium materials to ensure lasting
            durability and elegance
          </p>
        </div>
        <div className="service-item">
          <h1>
            <FontAwesomeIcon className="service-item-icon" icon={faLightbulb} />{" "}
            Lighting & Ambiance
          </h1>
          <p>
            Creating a dynamic atmosphere that enhances your product's appeal.
          </p>
        </div>
        {/* <div className="service-item">
          <h1>Turnkey Solutions</h1>
          <p>
            End-to-end services that allow you to focus on what matters
            most—your business.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Services;

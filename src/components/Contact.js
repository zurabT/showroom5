import {
  faAddressBook,
  faLocation,
  faLocationArrow,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareWhatsapp,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <ul className="contact-list">
          <li className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faMailBulk} /> Mail:
            gg.expo@yahoo.com
          </li>
          <li className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faPhone} /> Phone:
            +40 733871580{" "}
            <a href="https://wa.me/40733871580" target="_blank">
              <FontAwesomeIcon
                className="whatsapp-icon"
                icon={faWhatsapp}
                beat
                size="xl"
                style={{ color: "#029267" }}
              />
            </a>
          </li>
          {/* <li className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faLocationArrow} />{" "}
            address: address
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Contact;

import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function About() {
  const [isActiveAbout, setIsActiveAbout] = useState(false);
  const [isActiveWho, setIsActiveWho] = useState(false);
  const [isActiveWhat, setIsActiveWhat] = useState(false);
  const [isActiveWhy, setIsActiveWhy] = useState(false);
  const [isActiveOur, setIsActiveOur] = useState(false);

  return (
    <div className="about">
      <div className="about-us">
        <h1 onClick={() => setIsActiveAbout(!isActiveAbout)}>
          About Us{" "}
          <FontAwesomeIcon
            className={isActiveAbout ? "about-us-icon" : "about-us-icon-rotate"}
            icon={faCaretUp}
            style={{ color: "#a7a8a9" }}
          />
        </h1>
        <p
          className={
            isActiveAbout ? "about-us__content-active" : "about-us__content"
          }
        >
          At <span>"G & G"</span>, we specialize in creating bespoke,
          high-quality showrooms that bring your brand and products to life.
          With years of experience in design and craftsmanship, our team is
          dedicated to transforming spaces into immersive environments that
          captivate your audience and elevate your brand’s identity.
        </p>
      </div>

      <div className="we-are">
        <h1 onClick={() => setIsActiveWho(!isActiveWho)}>
          Who We Are{" "}
          <FontAwesomeIcon
            className={isActiveWho ? "who-icon" : "who-icon-rotate"}
            icon={faCaretUp}
            style={{ color: "#a7a8a9" }}
          />
        </h1>
        <p className={isActiveWho ? "who__content-active" : "who__content"}>
          Founded by industry professionals passionate about design and
          innovation, we have grown into a trusted name in the showroom
          construction field. We understand that a showroom is more than just a
          display area; it’s a reflection of your brand's story and values. Our
          expertise lies in designing showrooms that combine functionality,
          aesthetics, and technology to create unforgettable customer
          experiences.
        </p>
      </div>

      <div className="we-do">
        <h1 onClick={() => setIsActiveWhat(!isActiveWhat)}>
          What We Do{" "}
          <FontAwesomeIcon
            className={isActiveWhat ? "what-icon" : "what-icon-rotate"}
            icon={faCaretUp}
            style={{ color: "#a7a8a9" }}
          />
        </h1>
        <div
          className={isActiveWhat ? "what__content-active" : "what__content"}
        >
          <p>
            We offer end-to-end showroom solutions, from initial concept and
            design to full construction and installation. Our services include:
          </p>

          <ul>
            <li>
              <p>
                {" "}
                <span>Custom Showroom Design: </span>Tailored layouts and
                visuals that align with your brand vision.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span>High-Quality Fabrication: </span>Precision-crafted
                materials and finishes that ensure durability and elegance.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span>Technology Integration: </span>Smart solutions to enhance
                product displays, lighting, and customer interaction.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span>Project Management: </span>Comprehensive oversight to
                ensure every project is delivered on time and within budget.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="choose-us">
        <h1 onClick={() => setIsActiveWhy(!isActiveWhy)}>
          Why Choose Us?{" "}
          <FontAwesomeIcon
            className={isActiveWhy ? "why-icon" : "why-icon-rotate"}
            icon={faCaretUp}
            style={{ color: "#a7a8a9" }}
          />
        </h1>
        <div className={isActiveWhy ? "why__content-active" : "why__content"}>
          <p>We are committed to exceeding client expectations by providing:</p>

          <ul>
            <li>
              <p>
                {" "}
                <span>Expert Craftsmanship: </span>TEach project is handled with
                meticulous attention to detail and the highest standards of
                quality.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span>Tailored Solutions: </span>We work closely with you to
                understand your brand and create a showroom that reflects your
                unique identity.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span>Innovative Designs: </span>Our team stays at the forefront
                of design trends and technological advancements to offer
                creative, modern showroom solutions.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mission">
        <h1 onClick={() => setIsActiveOur(!isActiveOur)}>
          Our Mission{" "}
          <FontAwesomeIcon
            className={isActiveOur ? "our-icon" : "our-icon-rotate"}
            icon={faCaretUp}
            style={{ color: "#a7a8a9" }}
          />
        </h1>
        <p className={isActiveOur ? "our__content-active" : "our__content"}>
          Our mission is simple: to craft inspiring showrooms that leave a
          lasting impression. We believe that a well-designed showroom can shape
          customer experiences, boost brand engagement, and drive success. Let
          <span> "G & G"</span> turn your vision into reality with a showroom
          that speaks to your brand’s essence and business goals.
        </p>
      </div>
    </div>
  );
}

export default About;

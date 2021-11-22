import React from "react";
import "./about.styles.scss";
// import { profileImages } from "../../assets/index.js";

const About = () => {
  // const {profile1, profile2} = profileImages;

  return (
    <div className="about">
      <div className="author">
        <h2>ABOUT</h2>

        <div className="author-details">
          <div className="author-text">
            <p className="">
              {" "}
              My deep passion for outworldish and strange landscapes brough
              together with love for painting inspire me to capture vibrant hues
              of nature. Static means yet dynamic themes. My name is Paulina and
              this page is showcasing pieces of my creative spirit, chipped off
              the solid block of hard logic. The attitude and approach I exhibit
              are the intertwining of cold reason, coated in oniric brainstorm
              of ideas.
            </p>
            <p className="right">
              The cord of my sensitivity is trembling in the norther winds,
              spiritual heart plays strokes by icy diamond dust. The cheeks
              blush under the leash of marine, salty breath. I would like to
              open for you the gates of wonder. Let yourself linger and dream
              about what is there to come.{" "}
            </p>
          </div>

          <div className="author-pictures">
            {/* <div className='picture'><img src={profile1.default} alt='Paulina Okulska'/></div>
      <div className='picture'><img src={profile2.default} alt='Paulina Okulska'/></div> */}
            <div className="picture">
              <img src={`/profile/profile1.jpg`} alt="Paulina Okulska" />
            </div>
            <div className="picture">
              <img src={`/profile/profile2.jpg`} alt="Paulina Okulska" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

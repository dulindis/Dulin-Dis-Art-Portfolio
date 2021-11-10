import React from "react";
import Button from "../../components/button/button.component.jsx";
import { setCurrentArtwork } from "../../redux/root.reducer.js";
import "./artwork-page.styles.scss";

import images from "../../assets/index.js";

import { connect } from "react-redux";

const ArtworkPage = ({ currentArtwork, setCurrentArtwork, history }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="artwork">
      <div className="artwork-view">
        <div className="artwork-title">
          <h2>{currentArtwork.title}</h2>
        </div>
        <div className="artwork-details">
          <div
            className={`artwork-image`}
            onClick={(e) => console.log("clicked", e.target)}
          >
            <img
              src={images[capitalizeFirstLetter(currentArtwork.pictureUrl)]}
              alt={`${currentArtwork.title}`}
            />
          </div>
          
          <div className="artwork-metadata">
            <div className="artwork-description">
              <p>{currentArtwork.description}</p>
            </div>
            <div className="technique">{currentArtwork.technique}</div>
            <div className="size">{currentArtwork.size}</div>
          </div>
        </div>
      </div>

      <Button
        className="button"
        btnColor="grey"
        theme="outline"
        onClick={() => {
          setCurrentArtwork("");
          history.push("/gallery");
        }}
      >
        return to gallery
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentArtwork: state.currentArtwork,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentArtwork: (currentArtwork) =>
    dispatch(setCurrentArtwork(currentArtwork)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkPage);

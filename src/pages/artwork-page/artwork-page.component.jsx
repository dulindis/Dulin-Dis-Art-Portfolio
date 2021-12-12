import React, {useState, useEffect} from "react";
import Button from "../../components/button/button.component.jsx";
import "./artwork-page.styles.scss";
import { useParams,useHistory } from "react-router-dom";
import { connect } from "react-redux";

const ArtworkPage = ({ gallery }) => {
  const [artwork, setArtwork] = useState({});
  const { artworkId } = useParams();
  const {push} = useHistory();

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const artwork = gallery.find(galleryItem=> galleryItem.id === artworkId)
  //       setArtwork(artwork);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetch();
  // }, []);


  return (
    <div className="artwork">
        <h2>{artwork.title}</h2>

      <div className="artwork-view">
        <div className="artwork-title">
        </div>
        <div className="artwork-details">
          <div
            className={`artwork-image`}
            onClick={(e) => console.log("clicked", e.target)}
          >
            <img
              src={`/gallery/${artwork.pictureUrl}.jpg`}
              alt={`${artwork.title}`}
            />

          </div>
          
          <div className="artwork-metadata">
            <div className="artwork-description">
              <p>{artwork.description}</p>
            </div>
            <div className="technique">{artwork.technique}</div>
            <div className="size">{artwork.size}</div>
          </div>
        </div>
      </div>

      <Button
        className="button"
        btnColor="grey"
        theme="outline"
        onClick={() => 
         push("/gallery")
        }
      >
        return to gallery
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  gallery:state.gallery,
});


export default connect(mapStateToProps)(ArtworkPage);

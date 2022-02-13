import React from "react";
import Kaart from "./map.png"
const Map = () => {
  return (
    <>
      <div className="google-map">
          <span>
            {/* className="embed-responsive-item" */}
            <a href="https://www.google.com/maps/place/Soldatenstraat+63,+1082+Sint-Agatha-Berchem/@50.853542,4.3334288,13.56z/data=!4m5!3m4!1s0x47c3c1451357d329:0xdd7c4127352d0fa8!8m2!3d50.8617671!4d4.2962902" rel="noopener noreferrer" target="_blank">            <img src={Kaart} alt="map" />
</a>
          </span>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;

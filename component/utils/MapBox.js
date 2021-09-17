import React from "react";
// ES6
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./MapBox.module.css";

export default function MapBox() {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiYW5hcy1raGFuLTc1OTUiLCJhIjoiY2t0bjc0b3Y1MDAybjJvbGd1bGRzMmlzciJ9.V1plOhrdBmlu9Ap0GyJaEg",
  });
  return (
    <div className={styles.mapContainer}>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "inherit",
          width: "inherit",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    </div>
  );
}

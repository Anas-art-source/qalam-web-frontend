import React, { memo } from "react";
import ReactMapGL, { Marker, GeolocateControl } from "react-map-gl";
import styles from "./MapBox.module.css";
import { FaMapPin, FaTimes } from "react-icons/fa";

const attributionStyle = {
  right: 0,
  top: 0,
};

const geolocateControlStyle = {
  right: 10,
  top: 10,
};

export default memo(function MapBox(props) {
  // props: if want to render the marker on the basis of user current location, then props --> currentLocation={true}

  const [viewport, setViewport] = React.useState({
    longitude: -12.45,
    latitude: 37.78,
    zoom: 13,
  });

  const [curLocation, setCurLocation] = React.useState({
    type: "Point",
    longitude: 0,
    latitude: 0,
  });

  // based on the current location. However, it changes at the marker is dragged.
  const [userLocation, setUserLocation] = React.useState({
    type: "Point",
    latitude: curLocation.latitude,
    longitude: curLocation.longitude,
  });

  // run on mount. Get the current location of user and store it in curLocation
  React.useEffect(() => {
    console.log("HREE IN LOCATION");
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setUserLocation({
        type: "Point",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  // this will send the user home location to the 2 slide of form
  React.useEffect(() => {
    if (!props.onChangeHomeLocation) return;
    props.onChangeHomeLocation(userLocation);
  }, [props.onChangeHomeLocation, userLocation]);

  console.log(curLocation, "CURENT LOCATION");
  React.useEffect(() => {
    //set the view point of the user on the bases of current user

    if (!props.locationArr) return;
    setViewport((prevState) => {
      return {
        ...viewport,
        longitude:
          props.locationArr.length > 0
            ? props.locationArr[props.locationArr.length - 1].coordinates[0]
            : curLocation.longitude,
        latitude:
          props.locationArr.length > 0
            ? props.locationArr[props.locationArr.length - 1].coordinates[1]
            : curLocation.latitude,
      };
    });

    // updates the current user location based on the cordinates that we get from curLocation
    setUserLocation({
      longitude: curLocation.longitude,
      latitude: curLocation.latitude,
    });
  }, [curLocation, props.locationArr]);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/anas-khan-7595/ckry4qlbo00uk18nn19jvljiu"
      width="100%"
      height="50vh"
      onViewportChange={setViewport}
      attributionControl={false}
      mapboxApiAccessToken="pk.eyJ1IjoiYW5hcy1raGFuLTc1OTUiLCJhIjoiY2t0bjc0b3Y1MDAybjJvbGd1bGRzMmlzciJ9.V1plOhrdBmlu9Ap0GyJaEg"
    >
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        // trackUserLocation={true}
        auto
        onGeolocate={(data) => console.log(data)}
      />

      {props.currentLocation && (
        <Marker
          latitude={userLocation.latitude}
          longitude={userLocation.longitude}
          offsetLeft={-25}
          offsetTop={-50}
          draggable={true}
          onDragEnd={(e) =>
            setUserLocation({
              latitude: e.lngLat[1],
              longitude: e.lngLat[0],
            })
          }
        >
          <div className={styles.markerContainer}>
            <div className={styles.markerLabel}>
              <p>Your Home Location</p>
            </div>
            <FaMapPin fontSize="2rem" />
          </div>
        </Marker>
      )}

      {!props.currentLocation &&
        props.locationArr.map((point, index) => (
          <Marker
            key={point.coordinates[0]}
            latitude={point.coordinates[1]}
            longitude={point.coordinates[0]}
            offsetLeft={-20}
            offsetTop={-10}
            // draggable={props.draggable}
          >
            <div className={styles.markerContainer}>
              <div className={styles.markerLabel}>
                <p>{point.label.split(",")[0]}</p>
                <div
                  className={styles.closeBtn}
                  onClick={() => props.deleteLocationHandler(index)}
                >
                  <FaTimes />
                </div>
              </div>
              <FaMapPin fontSize="2rem" />
            </div>
          </Marker>
        ))}
    </ReactMapGL>
  );
});

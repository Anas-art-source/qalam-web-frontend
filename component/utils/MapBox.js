import React, { memo } from "react";
import ReactMapGL, { Marker, GeolocateControl } from "react-map-gl";
import styles from "./MapBox.module.css";
import { FaMapPin } from "react-icons/fa";

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
    longitude: 0,
    latitude: 0,
  });

  // based on the current location. However, it changes at the marker is dragged.
  const [userLocation, setUserLocation] = React.useState({
    latitude: curLocation.latitude,
    longitude: curLocation.longitude,
  });

  // run on mount. Get the current location of user and store it in curLocation
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  React.useEffect(() => {
    //set the view point of the user on the bases of current user location
    setViewport((prevState) => {
      return {
        ...viewport,
        longitude:
          props.locationArr.length > 0
            ? props.locationArr[props.locationArr.length - 1][0]
            : curLocation.longitude,
        latitude:
          props.locationArr.length > 0
            ? props.locationArr[props.locationArr.length - 1][1]
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
        trackUserLocation={true}
        auto
        onGeolocate={(data) => console.log(data)}
      />

      {props.currentLocation && (
        <Marker
          latitude={userLocation.latitude}
          longitude={userLocation.longitude}
          offsetLeft={-20}
          offsetTop={-10}
          draggable={true}
          onDragEnd={(e) =>
            setUserLocation({
              latitude: e.lngLat[1],
              longitude: e.lngLat[0],
            })
          }
        >
          <FaMapPin fontSize="2rem" />
        </Marker>
      )}

      {!props.currentLocation &&
        props.locationArr.map((point) => (
          <Marker
            key={point[0]}
            latitude={point[1]}
            longitude={point[0]}
            offsetLeft={-20}
            offsetTop={-10}
            // draggable={props.draggable}
          >
            <FaMapPin fontSize="2rem" />
          </Marker>
        ))}
    </ReactMapGL>
  );
});

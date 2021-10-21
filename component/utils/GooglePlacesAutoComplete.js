import React, { memo } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

export default memo(function GooglePlacesAutoComplete(props) {
  const [value, setValue] = React.useState(null);

  //   console.log(process.env.NEXT_PUBLIC_GOOGLE_API_KEY, "GOOGLE PALCEAS");

  React.useEffect(() => {
    async function getLatandLng(label) {
      const result = await geocodeByAddress(label);
      const { lat, lng } = await getLatLng(result[0]);
      let tempObj = {
        type: "Point",
        label: label,
        coordinates: [lng, lat],
      };
      // let tempArr = [lng, lat];
      props.onLoadLatLng((prevState) => [...prevState, tempObj]);
    }

    if (value) {
      getLatandLng(value.label);
    }
  }, [value, props.onLoadLatLng, props]);

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value,
          onChange: setValue,
          styles: {
            input: (provided) => ({
              ...provided,
              color: "black",
              fontSize: "1.3rem",
            }),
            option: (provided) => ({
              ...provided,
              color: "black",
              fontSize: "1.3rem",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "grey",
              fontSize: "1.3rem",
            }),
            placeholder: (provided) => ({
              ...provided,
              fontSize: "1.3rem",
            }),
          },
          placeholder: "Type the area you want to teach at",
        }}
      />
    </div>
  );
});

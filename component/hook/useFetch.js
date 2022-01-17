import { useCallback, useState } from "react";
import axios from "axios";

export default function useFetch() {
  // this hook is names as useFetch for legacy purpose
  // if use the axios library for sending request
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  const sendRequest = useCallback(
    async (URL, METHOD, data = null, formData = false) => {
      setIsLoading(true);

      if (METHOD === "GET") {
        return axios
          .get(URL, { withCredentials: true })
          .then((res) => {
            console.log(res);
            setIsLoading(false);
            setIsValid(true);
            return res.data;
          })
          .catch((err) => {
            setIsValid(false);
            setError(err.message);
          });
      }

      if (METHOD === "POST" && !formData) {
        return axios
          .post(URL, data, { withCredentials: true })
          .then((res) => {
            console.log(res, "RESPONE IN THEN BLOCK");
            setIsLoading(false);
            setIsValid(true);
            setError("");
            return res.data;
          })
          .catch((err) => {
            console.log(err.response, "ERROR");
            setIsValid(false);
            setError(err.response ? err.response.data.message : "Error");
          });
      }

      if (METHOD === "POST" && formData) {
        return axios
          .post(URL, data, {
            withCredentials: true,
            headers: { "content-type": "multipart/form-data" },
          })
          .then((res) => {
            console.log(res, "RESPONE IN THEN BLOCK");
            setIsLoading(false);
            setIsValid(true);
            setError("");
            return res.data;
          })
          .catch((err) => {
            console.log(err.response, "ERROR");
            setIsValid(false);
            setError(err.response ? err.response.data.message : "Error");
          });
      }

      if (METHOD === "PATCH" && formData) {
        return axios
          .patch(URL, data, {
            withCredentials: true,
            headers: { "content-type": "multipart/form-data" },
          })
          .then((res) => {
            console.log(res, "RESPONE IN THEN BLOCK");
            setIsLoading(false);
            setIsValid(true);
            setError("");
            return res.data;
          })
          .catch((err) => {
            console.log(err.response, "ERROR");
            setIsValid(false);
            setError(err.response.data ? err.response.data.message : "Error");
          });
      }
    },
    []
  );

  return { sendRequest, isLoading, isValid, setError, error, setIsValid };
}

// let sendData;
// if (formData) {
//   sendData = {
//     method: METHOD,
//     credentials: "include",
//     body: data ? data : "",
//   };
// }
// if (!formData) {
//   sendData = {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     method: METHOD ? METHOD : "GET",
//     credentials: "include",
//     body: data ? JSON.stringify(data) : "",
//   };
// }

// // GET REQUEST DOESNOT NEED ANY HEADERS
// if (METHOD === "GET") {
//   sendData = {
//     method: "GET",
//     credentials: "include",
//   };
// }

//   try {
//  console.log(...FORMDATA, METHOD, "CHECKING FOR FORMDATA")
// const response = await fetch(URL, sendData);

// ERROR NOT THROW HERE BECAUSE IN API WE ALREADY HAS CAPTURE MAJORITY OF ERROR
// AND WE HAVE ALSO SEND THEN AS VALID RESPONSE
// THEREFORE ERROR ARE CATCH AFTER PARSING RESPONSE

// if (!response.ok) {
//     console.log(response, "RESPNSE")
//     throw new Error(`${response.status} ${response.statusText}`)
// }

// const finalData = await response.json();
// console.log("DINALSAS");

// CATCHING ERROR THROW DATA.ERR
// if (finalData.message !== "successful") {
//   setError(finalData.message);
// }

// setIsLoading(false);
// setIsValid(true);
// return finalData;

//   } catch (err) {
//     setIsLoading(false);
//     setIsValid(false);
//     console.log(err, "ERRORRR");
//     if (err.message.startsWith(`TypeError`)) {
//       setError(
//         "Something Went Wrong Or To many request from your IP adress"
//       );
//     } else {
//       setError(`${err ? err : "Something went wrong. Try again later!"}`);
//     }
//   }

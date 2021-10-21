import "../styles/globals.css";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CookiesProvider>
  );
}

export default MyApp;

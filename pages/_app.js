import "../styles/globals.css";
import React from "react";
import { Provider, useSelector } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loadingActions } from "../store/loading";

import store from "../store/store";
import LoadingPage from "../component/LoadingPage/LoadingPage";

function App(props) {
  const router = useRouter();
  const { loading, path } = useSelector((data) => data.loading);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname
        ? dispatch(loadingActions.setLoading({ loading: true, path: url }))
        : dispatch(loadingActions.setLoading({ loading: false, path: url }));
    };
    const handleComplete = (url) =>
      dispatch(loadingActions.setLoading({ loading: false, path: url }));

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  console.log(loading, path, "here loading");

  if (loading) return <LoadingPage path={path} />;

  return <>{props.children}</>;
}

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <App>
          <Component {...pageProps} />
        </App>
      </Provider>
    </CookiesProvider>
  );
}

export default MyApp;

import store from "@/redux/store/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Provider store={store}>
        <SessionProvider>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </Provider>
    </>
  );
}

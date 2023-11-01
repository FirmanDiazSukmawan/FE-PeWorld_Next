import { store } from "@/redux/store";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const token = Cookies.get("token");
  const route = useRouter();


  return (
    <>
      <NextUIProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </NextUIProvider>
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@2.x.x/dist/alpine.min.js"
        defer
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossOrigin="anonymous"
        defer
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossOrigin="anonymous"
        defer
      ></script>
    </>
  );
}

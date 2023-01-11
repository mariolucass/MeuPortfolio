import * as routes from "./features/routes/routes";

import { GlobalStyle } from "./features/styles/globalStyles";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-creative";

export const App = () => (
  <>
    <routes.RoutesMain />
    <ToastContainer />
    <GlobalStyle />
  </>
);

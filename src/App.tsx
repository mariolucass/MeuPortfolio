import * as routes from "./features/routes/routes";
import { GlobalStyle } from "./features/styles/globalStyles";
import { ToastContainer } from "react-toastify";

import "swiper/css";
import "swiper/css/effect-creative";
import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <>
    <GlobalStyle />
    <ToastContainer />
    <routes.RoutesMain />
  </>
);

import * as routes from "./features/routes/routes";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./features/styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <>
    <ToastContainer />
    <GlobalStyle />
    <routes.RoutesMain />
  </>
);

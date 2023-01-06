import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./features/routes/routes";
import { GlobalStyle } from "./features/styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <>
    <ToastContainer />
    <GlobalStyle />
    <RoutesMain />
  </>
);

export default App;

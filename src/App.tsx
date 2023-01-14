import * as routes from "./features/routes/routes";

import { GlobalStyle } from "./features/styles/globalStyles";

import "swiper/css";
import "swiper/css/effect-creative";

export const App = () => (
  <>
    <routes.RoutesMain />
    <GlobalStyle />
  </>
);

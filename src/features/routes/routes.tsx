import { Route, Routes } from "react-router-dom";
import * as pages from "../pages";

export const RoutesMain = () => (
  <>
    <Routes>
      <Route path="/" element={<pages.Dashboard />}></Route>
      <Route path="/techs" element={<pages.Technologies />}></Route>
      <Route path="/projects" element={<pages.Projects />}></Route>
      <Route path="/about" element={<pages.About />}></Route>
    </Routes>
  </>
);

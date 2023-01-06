import * as pages from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const RoutesMain = () => (
  <>
    <Routes>
      <Route path="/" element={<pages.Dashboard />}></Route>
      <Route path="/techs" element={<pages.Technologies />}></Route>
      <Route path="/projects" element={<pages.Projects />}></Route>

      <Route path="/*" element={<Navigate to={"/"} />}></Route>
    </Routes>
  </>
);

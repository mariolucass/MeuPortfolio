import * as pages from "../pages";

import { Navigate, Route, Routes } from "react-router-dom";

import { AllContexts } from "../../context/index";

export const RoutesMain = () => (
  <AllContexts>
    <Routes>
      <Route path="/" element={<pages.Dashboard />}></Route>
      <Route path="/projects" element={<pages.Projects />}></Route>
      <Route path="/*" element={<Navigate to={"/"} />}></Route>
    </Routes>
  </AllContexts>
);

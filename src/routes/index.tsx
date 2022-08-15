import React from "react";
import { Route, Routes } from "react-router-dom";
import BeerList from "../views/BeerList";
const NotFound404 = React.lazy(() => import("../views/NotFound404"));

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BeerList />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default Routing;

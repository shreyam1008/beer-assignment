import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "../components/loaders";
import BeerList from "../views/BeerList";
const NotFound404 = React.lazy(() => import("../views/NotFound404"));

const Routing: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<BeerList />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;

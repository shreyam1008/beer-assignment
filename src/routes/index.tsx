import { Route, Routes } from "react-router-dom";
import BeerList from "../views/BeerList";
import NotFound404 from "../views/NotFound404";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BeerList />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default Routing;

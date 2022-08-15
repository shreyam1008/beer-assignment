import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import BeerProvider from "./context/beerContext";
import Routing from "./routes";

function App() {
  return (
    <BrowserRouter>
      <BeerProvider>
        <GlobalStyle />
        <Routing />
      </BeerProvider>
    </BrowserRouter>
  );
}

export default App;

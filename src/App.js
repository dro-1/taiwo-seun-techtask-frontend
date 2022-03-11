import { Home } from "./pages/home/home.page";
import "./App.css";
import { useEffect, useContext } from "react";
import { BotsContext } from "./context/bots.context";
import { contacts } from "./services/data";

function App() {
  const { setBots } = useContext(BotsContext);
  useEffect(() => {
    setBots(contacts);
  }, []);

  return <Home />;
}

export default App;

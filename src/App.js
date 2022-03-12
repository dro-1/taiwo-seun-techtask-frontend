import { Home } from "./pages/home/home.page";
import { Profile } from "./pages/profile/profile.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useContext } from "react";
import { BotsContext } from "./context/bots.context";
import { contacts } from "./services/data";
import { Layout } from "./components/layout.component";

function App() {
  const { addBots } = useContext(BotsContext);
  useEffect(() => {
    addBots(contacts);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile">
            <Route path=":profileId" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

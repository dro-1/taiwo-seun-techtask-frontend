import "./home.styles.scss";

import { Control } from "../../components/control/control.component";
import { Favorites } from "../../components/favorites/favorites.component";

export const Home = () => {
  return (
    <div className="container">
      <header>
        <h1>bl1p</h1>
      </header>
      <Control />
      <Favorites />
    </div>
  );
};

import "./control.styles.scss";

import gridIcon from "./../../assets/svg/grid.svg";
import listIcon from "./../../assets/svg/list.svg";
import { useContext } from "react";
import { BotsContext } from "../../context/bots.context";

export const Control = ({ setSearchText, searchText }) => {
  const { sortBots, setView } = useContext(BotsContext);

  return (
    <div className="controls-container">
      <h2>My Chatbots</h2>
      <div className="controls">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />
        <div className="order">
          <button onClick={() => sortBots("name")}>Order by Name</button>
          <button onClick={() => sortBots("creation")}>
            Order by Creation
          </button>
        </div>
        <div className="view">
          <button onClick={() => setView("grid")}>
            <img src={gridIcon} alt="" />
          </button>
          <button onClick={() => setView("list")}>
            <img src={listIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

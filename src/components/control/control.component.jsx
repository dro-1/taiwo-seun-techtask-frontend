import { useContext } from "react";

import "./control.styles.scss";
import gridIcon from "./../../assets/svg/grid.svg";
import listIcon from "./../../assets/svg/list.svg";
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
        <div className="btns">
          <div className="order">
            <button data-test="order-name" onClick={() => sortBots("name")}>
              Order by Name
            </button>
            <button
              data-test="order-creation"
              onClick={() => sortBots("creation")}
            >
              Order by Creation
            </button>
          </div>
          <div className="view">
            <button data-test="view-grid" onClick={() => setView("grid")}>
              <img src={gridIcon} alt="" />
            </button>
            <button data-test="view-list" onClick={() => setView("list")}>
              <img src={listIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

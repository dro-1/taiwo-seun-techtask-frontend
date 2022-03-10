import "./control.styles.scss";

import gridIcon from "./../../assets/svg/grid.svg";
import listIcon from "./../../assets/svg/list.svg";

export const Control = () => {
  return (
    <div className="controls-container">
      <h2>My Chatbots</h2>
      <div className="controls">
        <input type="text" placeholder="Search" />
        <div className="order">
          <button>Order by Name</button>
          <button>Order by Creation</button>
        </div>
        <div className="view">
          <button>
            <img src={gridIcon} alt="" />
          </button>
          <button>
            <img src={listIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

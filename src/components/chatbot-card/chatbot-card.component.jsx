import "./chatbot-card.styles.scss";

import starFilledIcon from "./../../assets/svg/star-filled.svg";
import starOutlineIcon from "./../../assets/svg/star-outline.svg";
import { useContext } from "react";
import { BotsContext } from "../../context/bots.context";

export const ChatbotCard = ({ bot }) => {
  const { toggleFavorite, view } = useContext(BotsContext);
  return view == "grid" ? (
    <div className="card grid">
      <button onClick={() => toggleFavorite(bot)}>
        <img
          className="star"
          src={bot.isFavorite ? starFilledIcon : starOutlineIcon}
          alt=""
        />
      </button>

      <img className="user" src={bot.image} alt="Chatbot" />

      <p>{bot.name}</p>

      <em>{bot.description}</em>
    </div>
  ) : (
    <div className="card list">
      <button onClick={() => toggleFavorite(bot)}>
        <img
          className="star"
          src={bot.isFavorite ? starFilledIcon : starOutlineIcon}
          alt=""
        />
      </button>

      <img className="user" src={bot.image} alt="Chatbot" />

      <p>{bot.name}</p>

      <em>Created on {bot.created}</em>
    </div>
  );
};

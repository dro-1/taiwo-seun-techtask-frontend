import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./chatbot-card.styles.scss";
import starFilledIcon from "./../../assets/svg/star-filled.svg";
import starOutlineIcon from "./../../assets/svg/star-outline.svg";
import { BotsContext } from "../../context/bots.context";

export const ChatbotCard = ({ bot }) => {
  const { toggleFavorite, view } = useContext(BotsContext);
  const navigate = useNavigate();
  return view === "grid" ? (
    <div onClick={() => navigate(`/profile/${bot.id}`)} className="card grid">
      <button data-test="toggle" onClick={() => toggleFavorite(bot)}>
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
      <div className="info">
        <p>{bot.name}</p>

        <div className="date">
          <em>Created on:</em>
          <em>{new Date(bot.created).toDateString()}</em>
        </div>
      </div>
    </div>
  );
};

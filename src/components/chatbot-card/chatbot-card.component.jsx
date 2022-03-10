import "./chatbot-card.styles.scss";

import { defaultProfile } from "../../services/data";
import starFilledIcon from "./../../assets/svg/star-filled.svg";
import starOutlineIcon from "./../../assets/svg/star-outline.svg";

export const ChatbotCard = () => {
  return (
    <div className="card">
      <img class="star" src={starFilledIcon} alt="" />

      <img class="user" src={defaultProfile.image} alt="Chatbot" />

      <p>{defaultProfile.name}</p>

      <em>{defaultProfile.description}</em>
    </div>
  );
};

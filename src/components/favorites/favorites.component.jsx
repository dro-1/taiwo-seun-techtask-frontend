import { useContext } from "react";

import { BotsContext } from "../../context/bots.context";
import { ChatbotCard } from "../chatbot-card/chatbot-card.component";
import "./favorites.styles.scss";

export const Favorites = () => {
  const { favoriteBots, view } = useContext(BotsContext);
  return (
    <section className="favorites">
      <h2>Favorites</h2>
      <div className={`wrapper ${view == "list" ? "list" : ""}`}>
        {favoriteBots.map((favoriteBot) => (
          <ChatbotCard key={favoriteBot.id} bot={favoriteBot} />
        ))}
      </div>
      <div className="divider" />
    </section>
  );
};

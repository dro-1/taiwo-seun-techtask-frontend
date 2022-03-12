import { useContext } from "react";

import { BotsContext } from "../../context/bots.context";
import { ChatbotCard } from "../chatbot-card/chatbot-card.component";
import "./searched.styles.scss";

export const Searched = () => {
  const { searchedBots, view } = useContext(BotsContext);

  return (
    <section className="searched">
      <h2>Search Results</h2>
      <div className="divider" />
      <div className={`wrapper ${view == "list" ? "list" : ""}`}>
        {searchedBots.map((searchedBot) => (
          <ChatbotCard key={searchedBot.id} bot={searchedBot} />
        ))}
      </div>
    </section>
  );
};

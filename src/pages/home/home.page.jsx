import "./home.styles.scss";

import { Control } from "../../components/control/control.component";
import { Favorites } from "../../components/favorites/favorites.component";
import { ChatbotCard } from "../../components/chatbot-card/chatbot-card.component";
import { useContext } from "react";
import { BotsContext } from "../../context/bots.context";

export const Home = () => {
  const { bots } = useContext(BotsContext);

  console.log(bots);

  return (
    <div className="container">
      <header>
        <h1>bl1p</h1>
      </header>
      <Control />
      <Favorites />
      <section className="chatbots">
        <ChatbotCard />
        <ChatbotCard />
        <ChatbotCard />
        <ChatbotCard />
        <ChatbotCard />
      </section>
    </div>
  );
};

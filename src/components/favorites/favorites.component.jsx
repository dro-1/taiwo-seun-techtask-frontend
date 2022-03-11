import { ChatbotCard } from "../chatbot-card/chatbot-card.component";
import "./favorites.styles.scss";

export const Favorites = () => {
  return (
    <section className="favorites">
      <h2>Favorites</h2>
      <div className="wrapper">
        <ChatbotCard />
        <ChatbotCard />
      </div>
      <div className="divider" />
    </section>
  );
};

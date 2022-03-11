import "./home.styles.scss";

import { Control } from "../../components/control/control.component";
import { Favorites } from "../../components/favorites/favorites.component";
import { ChatbotCard } from "../../components/chatbot-card/chatbot-card.component";
import { useContext, useEffect, useState } from "react";
import { BotsContext } from "../../context/bots.context";
import { Searched } from "../../components/searched/searched.component";

export const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedBots, setSearchedBots] = useState([]);
  const { normalBots, searchBots, favoriteBots, view } =
    useContext(BotsContext);

  useEffect(() => {
    let searchRes = searchBots(searchText);
    setSearchedBots(searchRes);
  }, [searchText]);

  return (
    <div className="container">
      <header>
        <h1>bl1p</h1>
      </header>
      <Control setSearchText={setSearchText} />
      {searchText.length ? (
        <Searched searchedBots={searchedBots} />
      ) : (
        <>
          {favoriteBots.length > 0 && <Favorites favoriteBots={favoriteBots} />}
          <section className={`chatbots ${view == "list" ? "list" : ""}`}>
            {normalBots.map((normalBot) => (
              <ChatbotCard key={normalBot.id} bot={normalBot} />
            ))}
          </section>
        </>
      )}
    </div>
  );
};

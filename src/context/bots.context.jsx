import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BotsContext = createContext({
  normalBots: null,
  favoriteBots: null,
  searchedBots: null,
  view: null,
  addBots: () => null,
  toggleFavorite: () => null,
  searchBots: () => null,
  sortBots: () => null,
  setView: () => null,
});

const BotsProvider = ({ children }) => {
  const [normalBots, setNormalBots] = useState([]);
  const [favoriteBots, setFavoriteBots] = useState([]);
  const [searchedBots, setSearchedBots] = useState([]);
  const [view, setView] = useState("grid");

  const sortBots = (orderType) => {
    const dateSortFn = (bot1, bot2) => {
      let date1 = new Date(bot1.created).getTime();
      let date2 = new Date(bot2.created).getTime();
      if (!date1) date1 = Infinity;
      if (!date2) date2 = Infinity;
      return date1 - date2;
    };

    const nameSortFn = (bot1, bot2) => {
      let bot1Name = bot1.name.toLowerCase();
      let bot2Name = bot2.name.toLowerCase();
      if (bot1Name < bot2Name) {
        return -1;
      }
      if (bot1Name > bot2Name) {
        return 1;
      }

      return 0;
    };

    if (orderType == "name") {
      setNormalBots([...normalBots.sort(nameSortFn)]);
      setFavoriteBots([...favoriteBots.sort(nameSortFn)]);
      setSearchedBots([...searchedBots.sort(nameSortFn)]);
    } else if (orderType == "creation") {
      setNormalBots([...normalBots.sort(dateSortFn)]);
      setFavoriteBots([...favoriteBots.sort(dateSortFn)]);
      setSearchedBots([...searchedBots.sort(dateSortFn)]);
    }
  };

  const addBots = (bots) => {
    let botsWithId = bots.map((bot) => {
      bot.id = uuidv4();
      bot.isFavorite = false;
      return bot;
    });
    setNormalBots(botsWithId);
  };

  const toggleFavorite = (bot) => {
    if (bot.isFavorite) {
      let newFavoriteBots = favoriteBots.filter((iBot) => iBot.id !== bot.id);
      setFavoriteBots(newFavoriteBots);

      bot.isFavorite = false;
      let normalBotsClone = [...normalBots, bot];

      setNormalBots(normalBotsClone);
    } else {
      let newNormalBots = normalBots.filter((iBot) => iBot.id !== bot.id);
      setNormalBots(newNormalBots);

      bot.isFavorite = true;
      let favoriteBotsClone = [...favoriteBots, bot];

      setFavoriteBots(favoriteBotsClone);
    }
  };

  const searchBots = (text) => {
    let res = [];
    for (let normalBot of normalBots) {
      if (normalBot.name.toLowerCase().includes(text)) {
        res.push(normalBot);
      }
    }
    for (let favoriteBot of favoriteBots) {
      if (favoriteBot.name.includes(text)) {
        res.push(favoriteBot);
      }
    }

    setSearchedBots(res);

    return res;
  };

  return (
    <BotsContext.Provider
      value={{
        normalBots,
        favoriteBots,
        searchedBots,
        view,
        addBots,
        toggleFavorite,
        searchBots,
        sortBots,
        setView,
      }}
    >
      {children}
    </BotsContext.Provider>
  );
};
export default BotsProvider;

import "./profile.style.scss";
import userIcon from "./../../assets/svg/user.svg";
import sentIcon from "./../../assets/svg/send-msg.svg";
import receivingIcon from "./../../assets/svg/incoming-msg.svg";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/loader/loader.component";
import { useContext, useState, useEffect } from "react";
import { BotsContext } from "../../context/bots.context";

export const Profile = () => {
  const [bot, setBot] = useState(null);
  const { profileId } = useParams();
  const { getBot } = useContext(BotsContext);

  useEffect(() => {
    setBot(getBot(profileId));
  }, []);

  return bot ? (
    <div className="profile">
      <main>
        <img src={bot.image} alt="User" />
        <div className="info">
          <h1>{bot.name}</h1>
          <em>{bot.template}</em>
        </div>
        <p> Created: {new Date(bot.created).toDateString()}</p>
      </main>
      <div className="divider" />
      <div className="status">
        <h2>Status</h2>
        <em>Status: Free</em>
        <button>Activate</button>
      </div>
      <div className="divider" />
      <div className="extras">
        <div className="location">
          <div className="region">
            <strong>Region & Idiom</strong>
            <em>EUA - English(EN)</em>
          </div>
          <div className="time">
            <strong>Time Zone</strong>
            <em>EUA - English(EN)</em>
          </div>
        </div>
        <div className="user">
          <img src={userIcon} alt="" />
          <div className="info">
            <strong>{bot.analytics.user.actived}</strong>
            <em>Active Users</em>
          </div>
        </div>
        <div className="received-messages">
          <img src={receivingIcon} alt="" />
          <div className="info">
            <strong>{bot.analytics.message.received}</strong>
            <em>Received Messages</em>
          </div>
        </div>
        <div className="sent-messages">
          <img src={sentIcon} alt="" />
          <div className="info">
            <strong>{bot.analytics.message.sent}</strong>
            <em>Sent Messages</em>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

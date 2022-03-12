import { defaultProfile } from "../../services/data";
import "./profile.style.scss";
import userIcon from "./../../assets/svg/user.svg";
import sentIcon from "./../../assets/svg/send-msg.svg";
import receivingIcon from "./../../assets/svg/incoming-msg.svg";

export const Profile = () => {
  return (
    <div className="profile">
      <main>
        <img src={defaultProfile.image} alt="User" />
        <div className="info">
          <h1>{defaultProfile.name}</h1>
          <em>{defaultProfile.template}</em>
        </div>
        <p> Created: {new Date(defaultProfile.created).toDateString()}</p>
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
            <strong>{defaultProfile.analytics.user.actived}</strong>
            <em>Active Users</em>
          </div>
        </div>
        <div className="received-messages">
          <img src={receivingIcon} alt="" />
          <div className="info">
            <strong>{defaultProfile.analytics.message.received}</strong>
            <em>Received Messages</em>
          </div>
        </div>
        <div className="sent-messages">
          <img src={sentIcon} alt="" />
          <div className="info">
            <strong>{defaultProfile.analytics.message.sent}</strong>
            <em>Sent Messages</em>
          </div>
        </div>
      </div>
    </div>
  );
};

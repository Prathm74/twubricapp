import { useState } from "react";
import "./TwubricCard.css";

// Icons
import { FaUserFriends, FaStar, FaSmileBeam } from "react-icons/fa";

const TwubricCard = ({ user, delay, onRemove }) => {
  const [removing, setRemoving] = useState(false);

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => onRemove(user.uid), 300);
  };

  const formatDate = (unix) => {
  const date = new Date(unix * 1000);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};


  return (
    <div
      className="twubric-card"
      style={{ "--delay": delay }}
    >
      <div className="twubric-header">
        <img src={user.image} alt={user.fullname} className="twubric-avatar" />

        <div className="twubric-user-info">
          <h3>{user.fullname}</h3>
          <p>@{user.username}</p>
        </div>
      </div>

      {/* Score Badge */}
      <div className="twubric-score-badge">
        Twubric Score: {user.twubric.total}
      </div>

      {/* Stats */}
      <div className="twubric-details">

        <div className="stat-item">
          <FaUserFriends className="stat-icon" />
          Friends: {user.twubric.friends}
        </div>

        <div className="stat-item">
          <FaStar className="stat-icon" />
          Influence: {user.twubric.influence}
        </div>

        <div className="stat-item">
          <FaSmileBeam className="stat-icon" />
          Chirpiness: {user.twubric.chirpiness}
        </div>

        <p><strong>Joined:</strong> {formatDate(user.join_date)}</p>


      </div>

      <button className="remove-btn" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default TwubricCard;

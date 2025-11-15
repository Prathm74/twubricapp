import { useEffect, useState } from "react";
import "./Home.css";
import rawData from "../../data/twubric.json";

// Date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TwubricCard from "../../components/TwubricCard/TwubricCard";
import EmptyState from "../../components/EmptyState/EmptyState";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUsers(rawData);
    setFiltered(rawData);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);



  // Sorting state
  const [sort, setSort] = useState({
    type: null,
    order: "desc",
  });

  // Date filters
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Load initial data
  useEffect(() => {
    setUsers(rawData);
    setFiltered(rawData);
  }, []);

  // Handle Sorting Button Clicks
  const handleSort = (type) => {
    if (sort.type === type) {
      // toggle asc/desc
      setSort({
        type,
        order: sort.order === "desc" ? "asc" : "desc",
      });
    } else {
      // first click always descending
      setSort({
        type,
        order: "desc",
      });
    }
  };

  // Sorting Logic
  useEffect(() => {
    if (!sort.type) {
      setFiltered([...users]);
      return;
    }

    const sorted = [...users].sort((a, b) => {
      const field = sort.type;

      if (sort.order === "desc") {
        return b.twubric[field] - a.twubric[field];
      } else {
        return a.twubric[field] - b.twubric[field];
      }
    });

    setFiltered(sorted);
  }, [sort, users]);

  // Date Filter Logic
  useEffect(() => {
    let temp = [...users];

    if (startDate) {
      const startUnix = Math.floor(startDate.getTime() / 1000);
      temp = temp.filter((u) => u.join_date >= startUnix);
    }

    if (endDate) {
      const endUnix = Math.floor(endDate.getTime() / 1000);
      temp = temp.filter((u) => u.join_date <= endUnix);
    }

    setFiltered(temp);
  }, [startDate, endDate, users]);

  // Remove user animation → state update
  const removeUser = (id) => {
    const updated = users.filter((u) => u.uid !== id);
    setUsers(updated);
    setFiltered(updated);
  };

  const resetFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setSort({ type: null, order: "desc" });
    setFiltered(users);
  };


  return (
    <div className="home-container">
      <h1 className="page-title">Twubric Followers</h1>

      {/* Sorting + Date Filter */}
      <div className="top-bar">
        <div className="sort-buttons">
          <button
            data-order={
              sort.type === "total" ? (sort.order === "desc" ? "↓" : "↑") : ""
            }
            className={sort.type === "total" ? "active" : ""}
            onClick={() => handleSort("total")}
          >
            Score
          </button>

          <button
            data-order={
              sort.type === "friends" ? (sort.order === "desc" ? "↓" : "↑") : ""
            }
            className={sort.type === "friends" ? "active" : ""}
            onClick={() => handleSort("friends")}
          >
            Friends
          </button>

          <button
            data-order={
              sort.type === "influence" ? (sort.order === "desc" ? "↓" : "↑") : ""
            }
            className={sort.type === "influence" ? "active" : ""}
            onClick={() => handleSort("influence")}
          >
            Influence
          </button>

          <button
            data-order={
              sort.type === "chirpiness"
                ? sort.order === "desc"
                  ? "↓"
                  : "↑"
                : ""
            }
            className={sort.type === "chirpiness" ? "active" : ""}
            onClick={() => handleSort("chirpiness")}
          >
            Chirpiness
          </button>
        </div>
        {sort.type && (
          <button className="clear-sort-btn" onClick={() => setSort({ type: null, order: "desc" })}>
            Clear Sort ✕
          </button>
        )}

        {/* Date Picker */}
        <div className="date-filter">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start Date"
          />

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End Date"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="twubric-grid">
        {loading ? (
          // show 6 skeleton cards
          [...Array(6)].map((_, idx) => <SkeletonCard key={idx} />)
        ) : filtered.length === 0 ? (
          <EmptyState onReset={resetFilters} />
        ) : (
          filtered.map((user, i) => (
            <TwubricCard
              key={user.uid}
              user={user}
              delay={`${i * 0.1}s`}
              onRemove={removeUser}
            />
          ))
        )}
      </div>

    </div>
  );
};

export default Home;

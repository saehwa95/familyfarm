import React from "react";
import { Link } from "react-router-dom";
import familyfarm_logo from "../images/familyfarm_logo.png";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="Main">
        <button
          type="button"
          style={{
            cursor: "pointer",
            border: "none",
            backgroundColor: "white",
          }}
        >
          <img
            src={familyfarm_logo}
            alt="logo"
            style={{ width: "1800px", height: "900px" }}
          />
        </button>
      </Link>
    </div>
  );
};

export default Home;

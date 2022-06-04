import React, { useState, useReducer } from "react";
import "./homepage.scss";

export const HomePage = () => {
  const [name, setName] = useState("");
  return (
    <div className="home_container">
      <div className="head">
        <input type="text" placeholder="Google Search" />
        <div className="weather"> Weather</div>
      </div>
      <form action="">
        <div className="home_text">Hello! What should we call you? </div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            width: "100%",
            borderColor: "#000000",
          }}
        />
        <button> Continue </button>
      </form>
    </div>
  );
};

import React, { useState, useReducer } from "react";
import "./landingpage.scss";

export const LandingPage = () => {
  const [name, setName] = useState("");
  return (
    <div className="container">
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

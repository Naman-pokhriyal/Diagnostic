import React from "react";

export default function Home() {
  const name = localStorage.getItem("name");
  return (
    <main>
      <h1 className="welcome">Welcome To Homeopathic Diagnostics</h1>
      <p className="welcomeName">
        User: <span className="wN">{name}</span>
      </p>
    </main>
  );
}

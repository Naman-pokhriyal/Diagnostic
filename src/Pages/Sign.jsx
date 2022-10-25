import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sign.css";

export function Sign() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <main>
      <h1>Sign In</h1>
      Don't have an account? <a href="/register">Register</a>
      <form>
        <input type="email" id="email" name="email" placeholder="Email" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <a href="/" className="forgot">
          Forgot Password
        </a>
        <button type="submit">Submit</button>
      </form>
      <div className="msg">{}</div>
    </main>
  );
}

export function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function registerCall() {
    localStorage.setItem("name", name);
  }
  return (
    <main>
      <h1>Register</h1>
      Already have an account? <a href="/sign">Sign in</a>
      <form onSubmit={() => registerCall()}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="msg">{}</div>
    </main>
  );
}

export default function Logging() {
  return (
    <Router>
      <Routes>
        <Route index element={<Sign />} />
        <Route index path="/sign" element={<Sign />} />
        <Route path="/register" element={<Register />} />
        <Route index path="/*" element={<Sign />} />
      </Routes>
    </Router>
  );
}

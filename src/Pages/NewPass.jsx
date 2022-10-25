import React from "react";

export default function NewPass() {
  return (
    <main>
      <h2>Change Password</h2>
      <form>
        <input
          type="password"
          name="oldpassword"
          id="oldpassword"
          placeholder="Old Password"
        />
        <input
          type="password"
          name="newpassword"
          id="newpassword"
          placeholder="New Password"
        />
        <input
          type="password"
          name="repassword"
          id="repassword"
          placeholder="Re-enter new Password"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

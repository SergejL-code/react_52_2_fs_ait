import React from "react";

function User({ firstName, lastName, age, userName, email }) {
  return (
    <div>
      <p>
        Name:{firstName}
        {lastName}
      </p>
      {age >= 30 ? <p>Age:{age}</p> : <p>Age is below 30</p>}
      <p>Username:{userName}</p>
      <p>
        Email:
        <a href={"mailto:${email}"}>{email}</a>
      </p>
    </div>
  );
}
export default User;

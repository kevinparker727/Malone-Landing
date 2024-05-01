import React from "react";

const form = () => {
  return (
    <div>
      <form className="flex-row">
        <label>First Name:</label>
        <input type="text" />
        <label>Last Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="text" />
        <label>Message:</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default form;

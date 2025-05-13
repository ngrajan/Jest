import React, { useState } from "react";

const UserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddUser({ formData });

    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
        />
      </div>

      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;

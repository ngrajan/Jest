import React from "react";

const UserList = ({ users }) => {
  const renderedUser = users.map((user) => {
    return (
      <tr key={user?.formData.name}>
        <td>{user?.formData?.name}</td>
        <td>{user?.formData?.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">{renderedUser}</tbody>
      {/* <tbody>{renderedUser}</tbody> */}
    </table>
  );
};

export default UserList;

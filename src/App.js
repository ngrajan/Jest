import { useState } from "react";
import UserForm from "./users/UserForm";
import UserList from "./users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onAddUser={onAddUser} />

      <hr />

      <UserList users={users} />
    </div>
  );
}

export default App;

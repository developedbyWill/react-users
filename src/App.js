import React, { useState } from "react";
import Users from "./components/Users";
import UsersForm from "./components/UsersForm";
import EditUsersForm from "./components/EditUsersForm";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState([
    { name: "Ada", email: "ada@test.com", gen: 5 },
    { name: "Tommy", email: "tommy@test.com", gen: 10 },
    { name: "Polly", email: "polly@test.com", gen: 15 },
    { name: "Arthur", email: "arthur@test.com", gen: 20 },
    { name: "John", email: "john@test.com", gen: 25 },
  ]);

  const handleAddUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditUser = (editedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? { ...user, ...editedUser } : user
    );
    setUsers(updatedUsers);
  };

  const handleShowEditModal = (user) => {
    setSelectedUser(user);
  };

  const handleHideEditModal = () => {
    setSelectedUser(null);
  };

  //   return (
  //     <div className="App">
  //       <h1>User List</h1>
  //       <ul>
  //         {users.map((user, index) => (
  //           <li key={index}>
  //             <h2>
  //               <strong>Name: </strong>
  //               {user.name}
  //             </h2>
  //             <p>
  //               <strong>Email: </strong>
  //               {user.email}
  //             </p>
  //             <p>
  //               <strong>Gen: </strong>
  //               {user.gen}
  //             </p>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }

  // refactored code to make UI more composable
  // return (
  //   <div>
  //     <Users users={users} />
  //   </div>
  // );

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>User Input Form</h1>
          <UsersForm onAddUser={handleAddUser} />
        </Col>
        <Col md={6}>
          <h1>User List</h1>
          <Users
            users={users}
            onDeleteUser={handleDeleteUser}
            onEditUser={handleShowEditModal}
          />
        </Col>
      </Row>
      {selectedUser && (
        <EditUsersForm
          user={selectedUser}
          onEditUser={handleEditUser}
          onHide={handleHideEditModal}
        />
      )}
    </Container>
  );
}

export default App;

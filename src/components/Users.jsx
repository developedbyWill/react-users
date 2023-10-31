import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

function Users({ users, onDeleteUser, onEditUser }) {
  const renderUsers = (users) => {
    return (
      <Row>
        {users.map((user, index) => (
          <Col key={index} md={6} style={{ marginBottom: "1rem" }}>
            <Card>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <strong>Email: </strong>
                  {user.email}
                  <br />
                  <strong>Gen: </strong>
                  {user.gen}
                </Card.Text>
                <Button variant="primary" onClick={() => onEditUser(user)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => onDeleteUser(user.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  return <div>{renderUsers(users)}</div>;
}

export default Users;

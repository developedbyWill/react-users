import React from "react";
import { Form, Button } from "react-bootstrap";

class UsersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, gen } = this.state;
    this.props.onAddUser({ name, email, gen });
    console.log("User added:", { name, email, gen });
    this.setState({ name: "", email: "", gen: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGen">
          <Form.Label>Gen:</Form.Label>
          <Form.Control
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
            placeholder="Enter gen"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add User
        </Button>
      </Form>
    );
  }
}

export default UsersForm;

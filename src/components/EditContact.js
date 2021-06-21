import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props)

    const {id, name, email} = props.location.state.contact;
    this.state = {
      id: id, 
      name: name,
      email: email
    }
  }
  state = {
    name: "",
    email: "",
  };

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" }); //* Resets the form after successful event
    this.props.history.push("/"); //* History helps to navigate to the latest page we wanted to switch to after an event occurrence
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
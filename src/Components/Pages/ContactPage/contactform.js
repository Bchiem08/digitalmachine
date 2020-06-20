import React, { Component } from "react";
import "./contactform.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      email: "",
      phonenumber: "",
      message: "",
    };
  }

  onFirstnameChange(event) {
    this.setState({ Firstname: event.target.value });
  }

  onLastnameChange(event) {
    this.setState({ Lastname: event.target.value });
  }

  onPhoneNumberChange(event) {
    this.setState({ phonenumber: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="form-box">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="Firstname">First name*</label>
            <input
              type="text"
              className="form-name"
              value={this.state.Firstname}
              onChange={this.onFirstnameChange.bind(this)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Lastname">Last name*</label>
            <input
              type="text"
              className="form-name"
              value={this.state.Lastname}
              onChange={this.onLastnameChange.bind(this)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="form-name"
              value={this.state.phonenumber}
              onChange={this.onPhoneNumberChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              className="form-area"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
              required
            />
          </div>
          <button type="submit" className="submitbutton">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

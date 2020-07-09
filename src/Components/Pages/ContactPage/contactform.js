import React, { Component } from "react";
import "./contactform.css";
import sendMessageToServer from "./sendbird/send-mail";
export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      Email: "",
      Phonenumber: "",
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
    this.setState({ Email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    sendMessageToServer(this.state)
      .then()
      .catch((error) => console.error(error));
    this.setState({
      Firstname: "",
      Lastname: "",
      Email: "",
      Phonenumber: "",
      message: "",
    });
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
              name="FirstName"
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
              name="LastName"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email*</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.Email}
              onChange={this.onEmailChange.bind(this)}
              name="Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Phonenumber">Phone Number</label>
            <input
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              className="form-name"
              value={this.state.phonenumber}
              onChange={this.onPhoneNumberChange.bind(this)}
              name="phonenumber"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              className="form-area"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
              name="message"
              required
            />
          </div>
          <button
            type="submit"
            className="submitbutton"
            onSubmit={this.handleSubmit.bind(this)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

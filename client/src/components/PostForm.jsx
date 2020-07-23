import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import { Button } from "react-bootstrap";

const defaultState = { name: "", message: "" };

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit(e) {
    e.preventDefault();
    const post = {
      id: Math.floor(Math.random() * 1000),
      name: this.state.name,
      message: this.state.message,
    };

    //Call action
    this.props.createPost(post);
    this.setState(defaultState);
  }
  render() {
    const { name, message } = this.state;
    return (
      <div className="section section bg-soft pb-5 overflow-hidden z-2">
        <div className="text-info font-weight-bolder">
          <h1>Express yourself!</h1>
        </div>

        <form onSubmit={this.onSubmit} method="posts">
          <div className="form-group mb-4">
            <label>Who is talking: </label>
            <br />
            <input
              name="name"
              type="text"
              value={name}
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <br />
          <div className="form-group mb-4">
            <label>Your message: </label>
            <br />
            <textarea
              name="message"
              type="text"
              value={message}
              className="form-control"
              onChange={this.onChange}
              rows="4"
              required
            />
          </div>
          <br />
          <Button variant="btn btn-primary animate-up-2" type="submit">
            Make your voice be heard!
          </Button>
        </form>
      </div>
    );
  }
}
PostForm.prototypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);

import React, { Component } from 'react';
import Styles from './Authentication.module.css';

const INITIAL_STATE = { email: '', password: '' };

export default class SignIn extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <br />
        <button type="button" className={Styles.button}>Sign In</button>
      </form>
    );
  }
}

import React, { Component } from 'react';


// import Tab from './Tab';
import SingIn from './SingIn';
import SingUp from './SingUp';
// import tabData from './tabData.json';

// Instruments
import Styles from './Authentication.module.css';

export default class Authentication extends Component {
  state = {
    on: false,
  };

  handleCheckSingin = () => {
    this.setState({ on: true });
  };

  handleCheckSingup = () => {
    this.setState({ on: false });
  };

  render() {
    const { on } = this.state;

    return (
      <div className={Styles.container}>
      
      <button className={Styles.button}  type="button" onClick={this.handleCheckSingin}>
          Sign in
        </button>

        <button className={Styles.button} type="button" onClick={this.handleCheckSingup}> 
          Sign up
        </button>
        {on ? <SingIn /> : <SingUp />}
      </div>
    );
  }
}

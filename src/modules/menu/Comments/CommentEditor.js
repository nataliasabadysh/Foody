import React, { Component } from 'react';
import Styles from './styles.module.css';


export default class  CommentEditor extends Component {
  state =  {
    text: '',
  };

  handleChange = ({ target }) => {
    const {name, value} = target;
    this.setState({ [name]: value, })
  };

  // + if ( I need to ckeck on empty value )  dont sent input ??? 
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)
  }
  handleKeyPress = e =>{
      console.log(e.code)   
  };

  handleSubmit = e =>{
    e.preventDefault();
    this.props.onSubmit(this.state.text); // отправлем значения нашей формы
    this.setState({ text: '', })
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={Styles.form}>
        <input
          className={Styles.textarea}
          placeholder=" Add Note"
           type="text"
           name="text"
           value={ text }
           onChange = { this.handleChange }
           autoComplete="off"
        />
        <button className={ Styles.btn} onClick={this.handleKeyPress}>Sent</button>
      </form>
      )
  }
};
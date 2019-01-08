import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as API from '../../services/api';

import MenuView from './MenuView';
import Modal from './Modal';

class MenuAdd extends Component {
  state = {
    newItem: {
      name: '',
      description: '',
      category: null,
      image: '',
      price: '',
    },
    categories: [],
    isModalOpen: false,
  };

  componentDidMount() {
    API.getCategories().then(data => this.setState({ categories: data }));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(prevState => ({
      newItem: { ...prevState.newItem, [name]: value },
    }));
  };

  handlePostItem = e => {
    e.preventDefault();
    const { history } = this.props;
    const { newItem } = this.state;

    API.postMenuItem({ ...newItem }).then(res => {
      if (res.status !== 201) return;
      history.replace({
        pathname: '/menu',
      });
    });
  };
  openModal = () =>{this.setState({isModalOpen: true,}) };
closeModal = () =>{this.setState({isModalOpen: false,}) };

  render() {
    const { newItem, categories,isModalOpen } = this.state;
    return (
      <>
      <div>
            {isModalOpen &&
            <Modal onClose={this.closeModal}>
             
              <MenuView
        handleChange={this.handleChange}
        handlePostItem={this.handlePostItem}
        options={categories}
        {...newItem}
      />
                <button type='button' onClick={this.closeModal }>Close</button>
            </Modal>}
            {/* <button type="submit">Добавить</button> */}
        </div>
      
      </>
    );
  }
}

export default withRouter(MenuAdd);

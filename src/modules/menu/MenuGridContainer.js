import React, { Component } from 'react';
import MenuGrid from './MenuGridView';
import Loader from '../../components/Loader';
import * as API from '../../services/api';

export default class MenuGridContainer extends Component {
  state = {
    menu: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const menu = await API.getAllMenuItems();
      this.setState({ menu, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }
  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(() => {
    this.setState(  
       state => ({  
         menu: state.menu.filter( 
           item => item.id !== id),})
        );
    });
};
handleAddMenuItem = () => {
  const item = {
    name: `New name: Dish`,
    price: 10,
    image:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=320&w=180',
  };
  API.postMenuItem(item).then( newItem => {  this.setState(state => ({
              menu: [...state.menu, newItem],
        }));
  });
};
  render() {
    const { menu, loading, error } = this.state;

    return (
      <div>
        <h1>Foody Menu</h1>
        {loading && <Loader />}
        {error && <h1>Error</h1>}

        {menu.length > 0 && <MenuGrid items={menu} onDelete={this.handleDeleteItem} />}
        <button type="button" onClick={this.handleAddMenuItem}>Add New Item</button>
      </div>
    );
  }
}

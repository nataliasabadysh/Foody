// Core
import React, { Component } from 'react';
import MenuItem from './MenuItemView';

// Instruments
import { withRouter } from 'react-router-dom';
import * as API from '../../services/api';

// Styles 
import Styles from './styles.module.css';

// Components 



// fetch getMenuItemById

class MenuItemContainer extends Component {
  state = { /* name, description, image, price, category, ingredients  */
    id:'',
    name:'',
    description:'',
    category:'',
    ingredients:'',
    image:'',
    price:'',
    delivery:'',
  };
  handleGoBackToMenu =()=>{
    const { history, location } = this.props;
    const { category } = this.state;

   if (location.state) {
     return history.push(location.state.from);
   }

   return history.push({
     pathname: '/menu',
     search: `?category=${category}`,
   });
  }
  componentDidMount() {
    const { match } = this.props;
    API.getMenuItemById(match.params.id).then(data =>
      this.setState({ ...data }),
    );
  }

  render() {
    const { id, name, description, image, price, category, ingredients, delivery } = this.state;

    return (
      <>
      <figure className={Styles.item} >
        <MenuItem itemMenu ={{id, name, description, image, price, category, ingredients , delivery }} />
        
        </figure>
        <button type='button' onClick={this.handleGoBackToMenu}>Go Back To Menu </button>
        </>
    );
  }
}

export default withRouter(MenuItemContainer);
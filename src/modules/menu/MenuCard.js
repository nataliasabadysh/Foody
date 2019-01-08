import React from 'react';
import Styles from './styles.module.css';

const MenuCard = ({ name, image, price , onDelete , delivery}) => (
  <div  className={Styles.cardMenu}>
    <img className={Styles.img} src={image} alt={name} />
    <figcaption>
    <p className={Styles.name}>{name}</p>
    <p>Price: {price}</p>
    { delivery && <p className={Styles.tag}>{delivery}</p>}
    </figcaption>
    <button type="button"  onClick= { onDelete} > Delete</button>
  </div>
);

export default MenuCard;


/*
import React from 'react';
import Styles from './styles.module.css';



const MenuItemView = ({ itemMenu : { name, description, image, price, category, ingredients }} ) => (
  <div>
    <img src={image} alt={name} width={480} height={320} />
    <figcaption>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Ingredients: {ingredients}</p>
      <p>Category: <b>{category}</b></p>
      <p>Price: {price}</p>
      </figcaption>
  </div>
);
export default MenuItemView;



*/
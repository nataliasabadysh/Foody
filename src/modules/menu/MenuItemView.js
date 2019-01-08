import React from 'react';
import Styles from './styles.module.css';



const MenuItemView = ({ itemMenu : { name, description, image, price, category, ingredients, delivery }} ) => (
  <div className={Styles.Menu}>
      <img  className={Styles.MenuImg} src={image} alt={name} width={480} height={320} />
   <div className={Styles.MenuDesc}>
   { delivery && <p className={Styles.tagFull}>{delivery}</p>}
      <p className={Styles.name}> {name}</p>
      <p className={Styles.p}> {description}</p>
      <p>Ingredients: { `${ ingredients }` }</p>
      <p>Category: <b>{category}</b></p>
      <p>Price: {price}</p>
     </div>
  </div>
);
export default MenuItemView;





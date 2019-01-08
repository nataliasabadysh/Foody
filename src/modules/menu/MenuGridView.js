import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import Styles from './styles.module.css';

import MenuCard from './MenuCard';

const MenuGrid = ({ items }) => (
  <ul className={Styles.List}>
    {items.map(item => (
      <li key={item.id} className={Styles.Cards}>
        <Link to={`${routes.MENU}/${item.id}`}>
          <MenuCard {...item} />
          
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuGrid;

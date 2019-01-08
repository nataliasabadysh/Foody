import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../../configs/user-nav';

import Styles from './Dropdown.module.css';

const Dropdown = () => (
  <div className={Styles.container}>
    <ul>
      {userNavItems.map(item => (
        <li className={Styles.list} key={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
    <button className={Styles.button} type="button">
      Logout
    </button>
  </div>
);
export default Dropdown;

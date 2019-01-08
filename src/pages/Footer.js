import React from 'react';
import Styles from './index.module.css';

const ContactPage = () => (
  <div className={Styles.bgFullWidth}>
      <h2>Footer</h2>
      <ul>
      <li> Contacts </li>
      <li> Careers </li>
      <li> Address </li>
        </ul>
        <ul>
      <li> <span role="img" aria-label="Snowman">&#9731;</span> Facebook </li>
      <li>  <span role="img" aria-label="Panda">🐼</span>Instagram </li>
      <li> <span role="img" aria-label="Panda">🐼</span>linkedIn </li>
        </ul>
  </div>
);

export default ContactPage;

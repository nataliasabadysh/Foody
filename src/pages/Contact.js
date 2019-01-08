import React from 'react';
import Styles from './index.module.css';

const ContactPage = () => (
  <div className={Styles.container}>
    <div className={Styles.center}>
      <h2>Contact page</h2>
      <ul lassName={Styles.container}>
        <li>
          Number:<b> +971 54 45 98 54 </b>
        </li>
        <li>
          Email: <b> nataliasabadysh@gmail.com</b>
        </li>
        <li>
          Adress: <b> Ukraine, Kiev</b>
        </li>
      </ul>
    </div>
  </div>
);

export default ContactPage;

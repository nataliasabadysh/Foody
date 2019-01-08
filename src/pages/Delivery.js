import React from 'react';
import Styles from './index.module.css';

const AboutPage = () => (
  <div className={Styles.container}>
    <div className={Styles.center}>
      <h2>Delivery page</h2>
      <ul>
        <li>Standard Delivery 
          <div>
            <p>FREE</p>
            <p>Order by: </p>
            <p>Expected delivery: </p>
           </div>
        </li>
        <li>Click & Collect
        <div>
            <p>FREE</p>
            <p>Order by: </p>
            <p>Expected delivery: </p>
           </div>
        </li>
        <li>Nominated Day
        <div>
            <p>FREE</p>
            <p>Order by: </p>
            <p>Expected delivery: </p>
           </div>
        </li>
        </ul>
    </div>
  </div>
);

export default AboutPage;

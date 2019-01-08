import React from 'react';
 import Styles from './History.module.css';

import orderHistory from './order-history.json';

const header = ['Date', 'Price', 'Delivery address', 'Rating'];

const History = () => (
  <div className={Styles.container}>
    <h2>Order history</h2>
    <table className={Styles.or} >
      <thead>
        <tr>
          {header.map(item => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orderHistory.map(item => (
          <tr key={item.id}>
            {Object.values(item).map(
              (value, idx) => idx !== 0 && <td key={value}>{value}</td>,
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default History;

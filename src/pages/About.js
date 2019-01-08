import React from 'react';
import Styles from './index.module.css';

const AboutPage = () => (
  <div className={Styles.container}>
    <div className={Styles.center}>
      <h2>About us page</h2>
      <p>
        We connect people and products – opening up a world of possibility. From
        bracelets and backpacks to tablets and toy cars – we give you access to
        everything you need and want. Our range is unparalleled, and our prices
        unbeatable.{' '}
      </p>

      <p>
        Driven by smart technology, everything we do is designed to put the
        power directly in your hands – giving you the freedom to shop however,
        whenever and wherever you like.{' '}
      </p>

      <p>
        We’re trusted by millions, because we don’t just deliver to your
        doorstep, we were born here. With Souq.com you’ll always be getting a
        good deal – with exceptional service that makes your shopping experience
        as easy and seamless as possible.{' '}
      </p>
    </div>
  </div>
);

export default AboutPage;

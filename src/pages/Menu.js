import React from 'react';
import MenuGrid from '../modules/menu/MenuGridContainer';
import SelectMenu from '../modules/menu/SelectMenu';


const MenuPage = () => (
  <div>
    <SelectMenu />
    <MenuGrid />


  </div>
);

export default MenuPage;

/*
Сделаем Loyid
const MenuPage = () => (
  <div>
+ filter 
    <MenuGrid />
+ sidebar
  </div>
);
*/

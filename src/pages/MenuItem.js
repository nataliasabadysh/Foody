import React from 'react';
import MenuItem from '../modules/menu/MenuItemContainer';
import Comments from '../modules/menu/Comments/CommentsMenu';  

const MenuItemPage = ({ match }) => (
  <div>
    <MenuItem id={match.params.id} />
    <Comments />
  </div>
);

export default MenuItemPage;

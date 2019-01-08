import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const getAllMenuItems = async () => {
  const response = await axios.get('/menu');
  return response.data;
};
export const getCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};
export const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};


export const getMenuItemsWithCategory = async category => {
  if (category === 'all'){
    return getAllMenuItems();
  }
  const response = await axios.get(`/menu?category=${category}`);
  return response.data;
};

//  Add on Post Menu
export const postMenuItem = async item => {
  const response = await axios.post(`/menu`, item );
  return response.data;
};

//delete
export const deleteMenuItem = async id =>{
  const response = await axios.delete(`/menu/${id}`);
  if (response.status === 200){
    return deleteMenuItem();
  }
}

  export const addMenuItem = async item =>
  axios.post(item).then(response => response.data);


// const getAllMenuItems = () =>
//   axios.get(BASE_URL).then(response => response.data);

// const getMenuItemById = id =>
//   axios.get(`${BASE_URL}/${id}`).then(response => response.data);

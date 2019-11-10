import axios from 'axios';

const baseUrl = 'https://localhost:44337';

const getValues = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/candy`).then((result) => {
      resolve(result.data);
    })
      .catch((error) => {
        reject(error);
      });
  });

  const DeleteInventory = candyId => axios.delete(`${baseUrl}/candy/${candyId}/eat`);

  const postCandy = newCandy => axios.post(`${baseUrl}/candy`, newCandy);

  export default {
    getValues,
    DeleteInventory,
    postCandy
  };
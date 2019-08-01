import axios from 'axios';

const AxiosWithAuth = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Token e25a39329d64685c578fd5556b20b30949e391df',
    }
  })
}

export default AxiosWithAuth;
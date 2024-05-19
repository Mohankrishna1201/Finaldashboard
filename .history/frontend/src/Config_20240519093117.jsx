import axios from 'axios';

// Set Axios to include credentials with requests
axios.defaults.withCredentials = true;




const Axios = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,

});

export default Axios;

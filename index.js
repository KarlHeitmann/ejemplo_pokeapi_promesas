const axios = require('axios');
// import axios, {isCancel, AxiosError} from 'axios';
// import axios from 'axios';

// var axios = require('axios');
// import axios from "axios"
console.log("Hola mundo")



var config = {
  method: 'get',
  url: 'https://pokeapi.co/api/v2/pokemon/ditto',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});



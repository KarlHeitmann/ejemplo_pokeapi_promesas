const axios = require('axios');
// import axios, {isCancel, AxiosError} from 'axios';
// import axios from 'axios';

// var axios = require('axios');
// import axios from "axios"
console.log("Hola mundo")

// OPERACIONES FUNDAMENTALES DE LOS ARREGLOS:
//
// 1. map: MAPEAR, toma un arreglo, y cada uno de sus elementos, lo CONVIERTE en otro elemento. El arreglo de salida tiene el mismo tamaño del arreglo de entrada
// 2. filter: FILTRA, toma un arreglo, le aplica un FILTRO, ¿qué hace ese filtro? te devuelve OTRO arreglo cuyos elementos serán <= que el tamaño del arreglo original/entrada
// 3. reduce: Toma un arreglo => lo lleva a un ESCALAR.

const arreglo_1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// con reduce, calcular la suma de todos los elementos del arreglo.


function main() {
  var config = {
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    // console.log(response.data);
    // console.log(response.data.moves);
    // response.data.moves.map(move => console.log())
    const nombres_movimientos = response.data.moves.map(move => {
      return { name: move.move.name, url: move.move.url }
    })

    // const nombres_movimientos = response.data.moves.map(move => { name: move.move.name, url: move.move.url })
    console.log(nombres_movimientos);
    // console.log(JSON.stringify(response.data));

  })
  .catch(function (error) {
    console.log(error);
  });

}

main()


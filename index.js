const axios = require('axios');
// import axios, {isCancel, AxiosError} from 'axios';
// import axios from 'axios';

// var axios = require('axios');
// import axios from "axios"
console.log("Hola mundo")

// OPERACIONES FUNDAMENTALES DE LOS ARREGLOS:
//
// 1. map: MAPEAR, toma un arreglo, y cada uno de sus elementos, lo CONVIERTE en otro elemento. El arreglo de salida tiene el mismo tamaño del arreglo de entrada 2. filter: FILTRA, toma un arreglo, le aplica un FILTRO, ¿qué hace ese filtro? te devuelve OTRO arreglo cuyos elementos serán <= que el tamaño del arreglo original/entrada 3. reduce: Toma un arreglo => lo lleva a un ESCALAR.
const arreglo_1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// con reduce, calcular la suma de todos los elementos del arreglo.


function main() {
  const config = {
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    const nombres_movimientos = response.data.moves.map(move => {
      return { name: move.move.name, url: move.move.url }
    })

    // Evenly, it's possible to use .catch
    Promise.all(nombres_movimientos).then(values => {
      /*
      const c = {
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
        headers: { }
      };

      axios(c)
      .then(function (response) {
        
      }
      */

      // console.log(typeof(values));
      console.log("values: ", values);
    }).catch(reason => {
      console.log(reason)
    });
    // console.log(nombres_movimientos);
  })
  .catch(function (error) {
    console.log(error);
  });

}

function prueba() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("one")
      return resolve("one")
    }, 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
  });
  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 4000);
  });
  const p5 = new Promise((resolve, reject) => {
    reject(new Error("reject"));
  });

  // Using .catch:
  Promise.all([p1, p2, p3, p4, p5])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error.message);
    });

  // Logs:
}

prueba()
// main()


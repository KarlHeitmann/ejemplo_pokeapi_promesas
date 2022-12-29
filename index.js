const axios = require('axios');
console.log("Hola mundo")

// OPERACIONES FUNDAMENTALES DE LOS ARREGLOS:
//
// 1. map: MAPEAR, toma un arreglo, y cada uno de sus elementos, lo CONVIERTE en otro elemento. El arreglo de salida tiene el mismo tamaño del arreglo de entrada
// 2. filter: FILTRA, toma un arreglo, le aplica un FILTRO, ¿qué hace ese filtro? te devuelve OTRO arreglo cuyos elementos serán <= que el tamaño del arreglo original/entrada
// 3. reduce: Toma un arreglo => lo lleva a un ESCALAR.
// con reduce, calcular la suma de todos los elementos del arreglo.


function main() {
  const config = {
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    const nombres_movimientos = response.data.moves.map(move => { // ESTO ES EQUIVALENTE AL .map de más abajo, solo que más largo.
      return { name: move.move.name, url: move.move.url }
    })

    // const fetch_promesas = nombres_movimientos.map(move => new Promise((resolve, reject) => {} ));
    const fetch_promesas = nombres_movimientos.map(move => axios({ method: 'get', url: move.url, headers: { } }))

    Promise.all(fetch_promesas).then(values => {
      // const data_display = values.map(move => { return {name: move.data.name, names: move.data.names} }) // equivalente al de abajo
      const data_display = values.map(move => ( {name: move.data.name, names: move.data.names} )) // ESTO ES EQUIVALENTE AL .map de arriba, solo que sin el return, va con paréntesis. OJO:::: ESTA SINTESIS BORRANDO EL RETURN solo sirve para funciones cuyo cuerpo TIENE UNA LINEA DE CODIGO.

      console.log(data_display)
    })
  })
  .catch(function (error) {
    console.log(error);
  });

}

main()


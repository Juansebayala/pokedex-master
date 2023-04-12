import { mostrarListadoPokemones } from '../listado.js';

test('muestra listado de pokemones con callback por default', () => {
  document.body.innerHTML = '<div class="list-group" id="indice">';
  mostrarListadoPokemones(['Bulbasaur', 'charmander', 'squirtle']);
  const $pokemones = document.querySelectorAll('#indice a');
  $pokemones[0].click();
  expect($pokemones).toHaveLength(3);
});

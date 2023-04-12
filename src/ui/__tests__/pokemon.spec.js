import mostrarPokemon from '../pokemon.js';
import fixture from './pokemon.fixture.js';

test('muestra un pokemon en la página', () => {
  document.body.innerHTML = fixture;
  mostrarPokemon({
    id: 1,
    nombre: 'Bulbasaur',
    foto: 'foto.jpg',
    tipos: ['grass'],
    habilidades: ['overgrow'],
    movimientos: [{
      movimiento: 'razor-wind',
      versiones: ['egg'],
    }],
  });
  const $nombrePokemon = document.querySelector('#pokemon-nombre');

  const $idPokemon = document.querySelector('#pokemon-id');

  const $imagenPokemon = document.querySelector('#pokemon-imagen');

  const $tiposPokemon = document.querySelector('#tipos');

  const $habilidadesPokemon = document.querySelector('#habilidades');

  const $movimientoPokemon = document.querySelector('#movimientos th');

  const $versionMovimiento = document.querySelector('#movimientos span');

  expect($nombrePokemon.textContent).toBe('Bulbasaur');
  expect($idPokemon.textContent).toBe('1');
  expect($imagenPokemon.src).toContain('foto.jpg');
  expect($tiposPokemon.textContent).toBe('grass');
  expect($habilidadesPokemon.textContent).toBe('overgrow');
  expect($movimientoPokemon.textContent).toBe('razor-wind');
  expect($versionMovimiento.textContent).toBe('egg');
});

import mostrarPaginador, { manejarCambioPagina } from '../paginador.js';

test('habilita el botón Anterior del paginador', () => {
  document.body.innerHTML = '<div id="paginador"></div>';
  mostrarPaginador(40, 2, undefined, 'urlAnterior');
  const $botonAnterior = document.querySelector('a[data-pagina="Anterior"]').parentNode;
  $botonAnterior.click();
  expect($botonAnterior.className).toBe('page-item');
});

test('desabilita el botón Siguiente del paginador', () => {
  document.body.innerHTML = '<div id="paginador"></div>';
  mostrarPaginador(40, 2, undefined, undefined);
  const $botonAnterior = document.querySelector('a[data-pagina="Siguiente"]').parentNode;
  expect($botonAnterior.className).toBe('page-item disabled');
});

it('cambia de página con url', () => {
  const evento = {
    preventDefault: jest.fn(),
    target: {
      getAttribute: jest.fn((atributo) => {
        const atributos = { href: 'http://asd.com' };
        return atributos[atributo];
      }),
      dataset: 2,
    },
  };
  const mockCallback = jest.fn();
  manejarCambioPagina(evento, mockCallback);
  expect(mockCallback).toBeCalledWith('http://asd.com');
});

it('cambia de página con número de página', () => {
  const evento = {
    preventDefault: jest.fn(),
    target: {
      getAttribute: jest.fn((atributo) => {
        const atributos = { href: '#' };
        return atributos[atributo];
      }),
      dataset: {
        pagina: 2,
      },
    },
  };
  const mockCallback = jest.fn();
  manejarCambioPagina(evento, mockCallback);
  expect(mockCallback).toBeCalledWith(2);
});

it('maneja el cambio de la página sin pasar un callbak', () => {
  const evento = {
    preventDefault: jest.fn(),
    target: {
      getAttribute: jest.fn((atributo) => {
        const atributos = { href: '#' };
        return atributos[atributo];
      }),
      dataset: {
        pagina: 2,
      },
    },
  };
  manejarCambioPagina(evento);
});

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RomanNumeralsService {
  constructor() {}

  numeroRomano(numero): string {
    if (numero > 1000 || numero < 1 || !Number.isInteger(numero)) {
      return 'error';
    }

    var numerosRomanos = [
      'I',
      'V',
      'X',
      'L',
      'C',
      'D',
      'M',
      '(V)',
      '(X)',
      '(L)',
      '(C)',
      '(D)',
      '(M)',
    ];
    var numeroRomano = '';
    var narray = String(numero).split('').reverse();
    var parser = function (item, index) {
      switch (item) {
        case '0':
        case '1':
        case '2':
        case '3':
          numeroRomano =
            new Array(Number(item) + 1).join(numerosRomanos[index * 2]) +
            numeroRomano;
          break;
        case '4':
          numeroRomano =
            numerosRomanos[index * 2] +
            numerosRomanos[index * 2 + 1] +
            numeroRomano;
          break;
        case '5':
        case '6':
        case '7':
        case '8':
          numeroRomano =
            numerosRomanos[index * 2 + 1] +
            new Array(Number(item) - 4).join(numerosRomanos[index * 2]) +
            numeroRomano;
          break;
        case '9':
          numeroRomano =
            numerosRomanos[index * 2] +
            numerosRomanos[index * 2 + 2] +
            numeroRomano;
          break;
      }
    };
    narray.forEach(parser);
    return numeroRomano;
  }
}

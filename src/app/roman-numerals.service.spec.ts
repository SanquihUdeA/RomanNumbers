import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`Número 1 es I en número romano`, () => {
    expect(service.numeroRomano(1)).toEqual('I');
  });

  it(`Número 1000 es M en número romano`, () => {
    expect(service.numeroRomano(1000)).toEqual('M');
  });

  it(`150 + 250 es M en número romano`, () => {
    expect(service.numeroRomano(150 + 250)).toEqual('CD');
  });

  it(`1000 - 250 es M en número romano`, () => {
    expect(service.numeroRomano(1000 - 250)).toEqual('DCCL');
  });

  it(`3 * 250 es M en número romano`, () => {
    expect(service.numeroRomano(3 * 255)).toEqual('DCCLXV');
  });

  it(`1000 / 250 es M en número romano`, () => {
    expect(service.numeroRomano(1000 / 250)).toEqual('IV');
  });

  it(`Números mayores a 1000 no funcionan`, () => {
    expect(service.numeroRomano(1001)).toEqual('error');
  });

  it(`El número 0 no funcionan`, () => {
    expect(service.numeroRomano(0)).toEqual('error');
  });

  it(`Números negativos no funcionan`, () => {
    expect(service.numeroRomano(-1)).toEqual('error');
  });

  it(`Números decimales no funcionan`, () => {
    expect(service.numeroRomano(-1.5)).toEqual('error');
  });
});

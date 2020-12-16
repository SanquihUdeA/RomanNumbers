import { Component } from '@angular/core';
import { RomanNumeralsService } from 'src/app/roman-numerals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = '1';
  romanNumber = 'I';

  constructor(private service: RomanNumeralsService) {}

  convertir(value) {
    this.romanNumber = this.service.numeroRomano(value);
  }
}

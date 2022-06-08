import { Component, Input, OnInit } from '@angular/core';
import { Curency } from '../app.component';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  @Input() items:Curency[] = [];

  constructor() { }

  ngOnInit(): void { }

  onChange = (
      input1:object|HTMLInputElement|any,
      input2:object|HTMLInputElement|any,
      select1:object|HTMLSelectElement|any,
      select2:object|HTMLSelectElement|any
    ): void => {
      let converted = 0;
    if (select1.value === '0' && select2.value !== '0') {
      converted = input1.value / this.items[select2.value].rate;
    }
    else if (select1.value !== '0' && select2.value === '0') {
       converted = input1.value * this.items[select1.value].rate;
    }
    else if (select1.value !== '0' && select2 !== '0' && select1.value !== select2.value) {
      converted = input1.value * this.items[select1.value].rate / this.items[select2.value].rate;
    }
    else {
      converted = input1.value * 1;
    }
    input2.value = parseFloat(converted.toFixed(2));
  }
}

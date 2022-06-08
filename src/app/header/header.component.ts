import { Component, Input, OnInit } from '@angular/core';
import { Curency } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{ 
  @Input() items:Curency[] = [];
  appTitle = 'Currency converter';

  constructor(){ }

  ngOnInit(): void { }

}

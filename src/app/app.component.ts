import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Curency {
  "r030": number
  "txt": string
  "rate": number
  "cc": string
  "exchangedate"?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json?r030=840";
  private data:any = [];
  public items: Curency[] = [
    {
      "r030":0,
      "txt":"Hryvnia",
      "rate": 1.0000,
      "cc":"UAH"
    },
  ];

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      this.data = data;
      for(let item of this.data){
        if(item.r030 === 840 || item.r030 === 978){
          this.items.push(item);
          if(item.r030 === 840){
            this.items[1].txt = "USA Dollar";
          }
          else if(item.r030 === 978){
            this.items[2].txt = "Euro";
          }
        }
      }
      this.items[0].exchangedate = this.items[1].exchangedate;
      console.log(this.items);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pet = {
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: ""
  }
  data;
  errors;


  constructor(private _http: HttpService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    console.log('hi')
    this._http.getAll().subscribe(data => {
      console.log(data);
      console.log(data['Pets']);
      this.data = data['Pets'];
      console.log(this);
    })
  }
}
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
// import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    //this.getAll();
  }
  getAll() {
    this._http.getAll().subscribe(data => {
      console.log(data);
      console.log(data['Pets']);
      this.data = data['Pets'];
    })
  }
}

  // create() {
  //   this._http.createRestaurant(this.restaurant).subscribe(data => {
  //     console.log(data);
  //     if (data['error']) {
  //       this.errors = data['error']
  //       console.log(this.errors);
  //     }
  //     else {
  //       this.data = data['Restaurants'];
  //     }
  //   })
  //   this.restaurant = {
  //     name: "",
  //     cuisine: ""
  //   }
  //   this.getAll()
  // }}
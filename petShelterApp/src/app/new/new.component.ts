import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { last } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
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
  errorMsg: string;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }
  createPet() {
    let observable = this._httpService.createPet(this.pet);
    observable.subscribe(data => {
      console.log(data)
      if (data['message'] == "success") {
        this.errorMsg = null;
        this.pet = ({
          name: "",
          type: "",
          description: "",
          skill1: "",
          skill2: "",
          skill3: ""
        })
        this._router.navigate(['/'])
      } else {
        console.log(data)
        console.log(data['error']['errors'])
        if (data['error']) {
          this.errorMsg = data['error']['message']
        }
      }
    })
  }
}
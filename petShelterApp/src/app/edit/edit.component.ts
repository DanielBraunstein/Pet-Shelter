import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  petId: string;
  petPost = {
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

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(data => {
      console.log("route params", data)
      console.log("route params", data.id)
      this.petId = data.id;
      this.getOnePet()
    })
  }
  getOnePet() {
    console.log("getOnePet")
    let observable = this._httpService.viewOnePet(this.petId)
    observable.subscribe(data => {
      console.log("got the data", data)
      if (data['message'] == "success") {
        this.petPost.name = data['data'][0]['name'];
        this.petPost.type = data['data'][0]['type'];
        this.petPost.description = data['data'][0]['description'];
        if (data['data'][0]['skill1']){
          this.petPost.skill1 = data['data'][0]['skill1']
        }
        if (data['data'][0]['skill1']){
          this.petPost.skill1 = data['data'][0]['skill1']
        }
        if (data['data'][0]['skill1']){
          this.petPost.skill1 = data['data'][0]['skill1']
        }
      }
    })
  }
  updatePet() {
     console.log("edit.component.ts");
     console.log(this.petPost);
     let observable = this._httpService.updatePet(this.petId, this.petPost);
     observable.subscribe(data => {
       console.log("data from edit pet", data)
       if (data['message'] == "success") {
         this.errorMsg = null;
         this._router.navigate(['/'])
       } else {
       if (data['error']) {
         this.errorMsg = data['error']['message']
       }
    
     }}
   )}
  }
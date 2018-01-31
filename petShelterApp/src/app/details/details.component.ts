import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  petId: string;
  petDetails = {
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
    likes: 0
  }
  petData;
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
        this.petDetails.name = data['data'][0]['name'];
        this.petDetails.type = data['data'][0]['type'];
        this.petDetails.description = data['data'][0]['description'];
        // if (data['data'][0]['skill1'] != ""){
        //   console.log(data['data'][0]['skill1']);
        //   var temp = data['data'][0]['skill1'];
        this.petDetails.skill1 = data['data'][0]['skill1']
        // }
        // if (data['data'][0]['skill2'] != ""){
        this.petDetails.skill2 = data['data'][0]['skill2']
        // }
        // if (data['data'][0]['skill3']){
        this.petDetails.skill3 = data['data'][0]['skill3']
        // }
        if (data['data'][0]['likes']){
          this.petDetails.likes = data['data'][0]['likes']
        }else{
          data['data'][0]['likes'] = 0;
          this.petDetails.likes=0;
        }
        this.petData = data['data'][0];
        console.log(this.petDetails)
      }
    })
  }
  likePet() {
    console.log("details.component.ts");
    console.log(this.petData);
    this.petData.likes = this.petData.likes+1;
    let observable = this._httpService.updatePet(this.petId, this.petData);
    observable.subscribe(data => {
      console.log("data from like pet", data)
      if (data['message'] == "success") {
        this.errorMsg = null;
        this.getOnePet();
      } else {
        if (data['error']) {
          this.errorMsg = data['error']['message']
        }

      }
    }
    )
  }
  adopt() {
    console.log("removing pet", this)
      this._httpService.adopt(this.petId).subscribe(data => {
      console.log("deleting at details component", data);
      console.log(data['message']);
      if (data['message'] == 'success') {
        console.log("success")
        this._router.navigate(['/'])
      }
      else {
        console.log("error");
        this.errors.errorMsg = "cannot delete at this time"
      }
    })
  }
}
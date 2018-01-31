import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router'

@Injectable()
export class HttpService {

  constructor(private _http :  HttpClient) { }

  getAll(){
    return this._http.get(`/pets`);
  }
  createPet(pet){
    //formerly createRestaurant
    console.log("creating pet all @ http.service.ts")
    return this._http.post(`/pet`, pet);
  }
  viewOnePet(id){
    //formerly viewOneRestaurant
    console.log("view details @ http.service.ts")
    return this._http.get('/pet/' + id);
  }
  updatePet(petId, pet){
    //formerly updateRestaurant
    console.log("editPet @ http.service.ts")
    console.log(petId)
    console.log(pet)
    return this._http.patch(`/update/`+ petId, pet);
  }
  likePet(petId, pet){
    //formerly updateRestaurant
    console.log("editPet @ http.service.ts")
    console.log(petId)
    return this._http.patch(`/update/`+ petId, pet);
  }
  adopt(petId){
    //formerly deleteRestaurant
    console.log("adopt @ http.service.ts");
    return this._http.delete(`/pet/` + petId)
  }  
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleDetails } from './vehicle-details';
import { Eligibility } from './eligibility';


@Injectable({
  providedIn: 'root'
})
export class LoanService {
  // [x: string]: any;

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9779//loanRest/api";

  // ADDING PRODUCT
  addVehicleDetails(vehicledetails:VehicleDetails)
  {
    return this.httpClient.post(this.baseUrl+"/VehicleDetails",vehicledetails);
  }


  addEligibility(elig:Eligibility)
  {
    return this.httpClient.post(this.baseUrl+"/Eligibility",elig);
  }
  
}

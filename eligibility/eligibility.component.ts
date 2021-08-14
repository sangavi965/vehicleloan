// import { Component, OnInit } from '@angular/core';

// import { EligibilityService } from '../eligibility.service'

// @Component({
//   selector: 'app-eligibility',
//   templateUrl: './eligibility.component.html',
//   styleUrls: ['./eligibility.component.css']
// })
// export class EligibilityComponent implements OnInit {
//     eligibility:any;
//     // exshowroom:number=0;
//     // anualsalary:number=0;
//   constructor(private service:EligibilityService) { }
   
//   ngOnInit(): void {
//     this.service.getEligibility().subscribe(data=>{
//       this.eligibility=data;
//       console.log(data);
//     })

    
//   }
  

// }

import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { Eligibility } from '../eligibility';
import { LoanService } from '../loan.service';
import { VehicleDetails } from '../vehicle-details';
@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit{

vehicle:VehicleDetails;
  
  elig:Eligibility;
  constructor(private loanservice:LoanService,private router:Router) { 
  this.vehicle=new VehicleDetails();
    this.elig=new Eligibility();
    
  }
    
  ngOnInit(): void {
  }

  saveData()
  {
    
    
    this.loanservice.addVehicleDetails(this.vehicle).subscribe
    (res=>{
      console.log("Return value from REST"+res);
    });


    this.loanservice.addEligibility(this.elig).subscribe
    (res=>{
      console.log("Return value from REST"+res);
    });

    
  
    
  
  }
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emi-calc',
  templateUrl: './emi-calc.component.html',
  styleUrls: ['./emi-calc.component.css']
})
export class EmiCalcComponent implements OnInit {

  constructor() { }
   
  public rateOfInterest:number=10;
  public loanamount:number=100000;//principal//balance
  public loanterms:number=24;
  public emi:number;
  r:number;
  n:number;
  totalPayment:number;
  totalInterest:number;
  
  
  calculateEmi(){
    
    this.n=this.loanterms;
    this.r=this.rateOfInterest/(12*100);
    this.emi = this.loanamount*this.r*((Math.pow(1+this.r,this.n))/(Math.pow(1+this.r,this.n)-1));
    this.totalPayment=this.emi*this.n; 
    this.totalInterest=this.totalPayment-this.loanamount;

  }


  ngOnInit(): void {
  }

}

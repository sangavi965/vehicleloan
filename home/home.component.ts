import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  ab(){
    this.router.navigate(['/aboutus']);
  }
  home(pagename:string){
    this.router.navigate(['/home']);
  }
  calc(){
    this.router.navigate(['/emiCalcLink']);
  }

  apply(){
   this.router.navigate(['/eligibleLink']);
  }
  
  
}

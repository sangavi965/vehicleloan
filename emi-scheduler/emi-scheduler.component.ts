import { Component, OnInit } from '@angular/core';

declare const getValues: any;

@Component({
  selector: 'app-emi-scheduler',
  templateUrl: './emi-scheduler.component.html',
  styleUrls: ['./emi-scheduler.component.css']
})
export class EmiSchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    getValues();
  }
}

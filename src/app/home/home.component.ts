import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lstorage:any;
  constructor() { 
    this.lstorage = JSON.parse(localStorage.getItem('questionaire')!);
    !this.lstorage ? localStorage.setItem('questionaire',JSON.stringify([])) : null;
    this.lstorage = JSON.parse(localStorage.getItem('questionaire')!);
  }

  ngOnInit(): void {
  }

  initQuestions(){
    // this.lstorage
  }

}

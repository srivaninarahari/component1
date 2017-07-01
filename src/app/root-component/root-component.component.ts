import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-component',//this  is  selector  of  rootcomponent
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})


//root component class  is  appear
export class RootComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

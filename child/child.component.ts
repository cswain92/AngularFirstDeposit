import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() item: string;
  @Output() addNewEvent= new EventEmitter();
 
  addNewItem(value){
    this.addNewEvent.emit(value);
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  currentItem = 'Television';
 items = ['item1', 'item2', 'item3', 'item4']
   
 addItems(value: string){
   this.items.push(value);
 }
  ngOnInit() {
  }

}

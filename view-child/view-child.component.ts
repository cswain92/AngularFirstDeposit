import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  userName= 'Angular';
  constructor() { }

  @ViewChild('bala', {static: false}) bala: ElementRef;

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.bala.nativeElement.style.color = 'red';
    this.userName = 'Chiranjib';
  }

}

import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild('div', {static: false}) div;
  subject = new BehaviorSubject<string>('Not clicked');
ngAfterViewInit() {
 this.subject.subscribe({
   next: (value) => {
     this.div.nativeElement.innerHTML = value;
     this.div.nativeElement.style.color = 'red';
   }
 });
//  this.subject.next('Not clicked');
}
click() {
 this.subject.next('clicked');
 this.div.nativeElement.style.color = 'green';
}

  ngOnInit() {
  }

}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { nextTick } from 'process';
import { Subject, BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild('div', {static: false}) div;
   subject = new Subject<string>();

  ngOnInit() {
}
ngAfterViewInit() {
  this.subject.subscribe({
    next: (value) => {
      this.div.nativeElement.innerHTML = value;
      this.div.nativeElement.style.color = 'red';
    }
  });
  this.subject.next('Not clicked');
}
click() {
  this.subject.next('clicked');
  this.div.nativeElement.style.color = 'green';
}

}

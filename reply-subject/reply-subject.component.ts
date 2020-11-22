import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.css']
})
export class ReplySubjectComponent implements OnInit {

  constructor() { }
  replySubject = new Subject();


  ngOnInit() {
    // observer 1
    this.replySubject.subscribe({
      next: (value)=> console.log(value, '\n')
    });

    this.replySubject.next('First One');
    this.replySubject.next('Second One');
    this.replySubject.next('Third One');
     // observer2
    this.replySubject.subscribe({
      next: (value)=> console.log(value)
    });
    this.replySubject.next('First One');
    this.replySubject.next('Second One');
    this.replySubject.next('Third One');
    
    
  }

}

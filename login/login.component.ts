import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // form: FormGroup;

  constructor(private fb: FormBuilder) { }
  public form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {

  }

  login() {
    const val = this.form.value;

    if (val.email && val.password ) { console.log(val); }
    else console.log('Invalid entry');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DateLessThan, MustMatch } from './validation/data.validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  dynamicFormFields!: any[];
  get f() {
    return this.myForm.controls;
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        inputOne: [''],
        inputTwo: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators:[ MustMatch('password', 'confirmPassword'),DateLessThan('inputOne', 'inputTwo')]}
    );
  }

submit(){
  this.myForm.markAllAsTouched();
  console.log(this.myForm);
  
}
}



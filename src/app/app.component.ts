import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  myForm!:FormGroup;
  dynamicFormFields!: any[];
  test:string = '';
  constructor(private fb:FormBuilder) {   
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      inputOne: ['',[Validators.required]],
      inputTwo: ['',[Validators.required]],
      inputThree: ['',[Validators.required]],
      inputFour: ['',[Validators.required]]
    })

    setTimeout(() => {
      this.myForm.get('inputOne')?.disable();
    }, 7000);

    setTimeout(() => {
      this.myForm.get('inputOne')?.enable();
    }, 14000);
  }
 
}

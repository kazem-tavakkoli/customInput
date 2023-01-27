import { Component,Input} from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-custom-input-text',
  templateUrl: './custom-input-text.component.html',
  styleUrls: ['./custom-input-text.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:CustomInputTextComponent,
      multi:true
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CustomInputTextComponent
    }
  ]
})
export class CustomInputTextComponent implements ControlValueAccessor,Validator {
  

  @Input()
  public label!: string;
 
  @Input()
  public placeholder!: string;
 
  @Input()
  public required = false;
 
  @Input()
  public disabled = false;
 
  @Input()
  public data!: string;
 
  @Input()
  public minlength = 0;
  public onChangeFn = (_: any) => {};
 
  public onTouchedFn = () => {};


 validate(control: AbstractControl): ValidationErrors | null {
  const quantity = control.value;
  if (quantity <= 0) {
    return {
      mustBePositive: {
        quantity
      }
    };
  }
  return null
}
  registerOnValidatorChange?(fn: () => void): void {
    console.log(fn);
  }
  
  public registerOnChange(fn: any): void {
     this.onChangeFn = fn;
  }
 
  public registerOnTouched(fn: any): void {
     this.onTouchedFn = fn;
  }
 
  public setDisabledState(isDisabled: boolean): void {
     this.disabled = isDisabled;
  }
 
  public writeValue(obj: any): void {
     this.data = obj;
  }
 
  public onChange() {
     this.onChangeFn(this.data);
  }
}
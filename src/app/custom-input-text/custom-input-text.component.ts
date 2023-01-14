import { ChangeDetectionStrategy, Component,Input, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input-text',
  templateUrl: './custom-input-text.component.html',
  styleUrls: ['./custom-input-text.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:CustomInputTextComponent,
      multi:true
    }
  ]
})
export class CustomInputTextComponent implements OnInit,ControlValueAccessor {

  @Input() labale!:string;
  @Input() disabled = false;
  value!:string;

  onChange!:(value:string)=>void;
  onTouched!:()=>void;

  constructor(public renderer: Renderer2){}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  
  }

  

}

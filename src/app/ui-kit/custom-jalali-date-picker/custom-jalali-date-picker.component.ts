import {Component, Input, OnInit, Self} from '@angular/core';
import {FormControl, NgControl, ReactiveFormsModule} from "@angular/forms";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {NgClass} from "@angular/common";
import {NgPersianDatepickerModule} from 'ng-persian-datepicker';

@Component({
  selector: 'app-custom-jalali-date-picker',
  standalone: true,
  imports: [NgPersianDatepickerModule, ReactiveFormsModule, NgClass],
  template: `
    <div class="w-full" [ngClass]="class">
      <ng-persian-datepicker
        [dateInitValue]="!!value">
        <input
          [formControl]="control"
          type="text"
          [placeholder]="placeholder"
          #input
          [value]="value"
          [disabled]="disabled"
          (input)="onChanged($event)"
          (blur)="touched()"/>
      </ng-persian-datepicker>
    </div> `,
  styles: [`
    :host ::ng-deep {
      input {
        background: #FFFFFF;
        border: unset;
        padding: 10px;
        margin-bottom: 8px;
        border-radius: 5px;

        ::placeholder {
          color: #C8C8C8;
          font-weight: 300;
          font-size: 5px;
          line-height: 48px;
        }
      }

      .datepicker-outer-container {
        position: fixed;
        z-index: 10000;
      }
    }`
  ]
})
export class CustomJalaliDatePickerComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl

  @Input() class: string;
  @Input() placeholder: string;

  constructor(
    @Self() public controlDir: NgControl
  ) {
    super()
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    this.control = this.controlDir.control as FormControl
  }

  public onChanged(event: Event): void {
    const value: string = (event.target as HTMLInputElement).value;
    this.changed(!!value ? value : null);
  }
}

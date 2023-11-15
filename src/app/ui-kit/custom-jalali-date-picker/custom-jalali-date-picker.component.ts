import {Component, ElementRef, Input, OnInit, Self, ViewChild} from '@angular/core';
import {FormControl, NgControl, ReactiveFormsModule} from "@angular/forms";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {NgClass} from "@angular/common";
import {NgPersianDatepickerModule} from 'ng-persian-datepicker';

@Component({
  selector: 'app-custom-jalali-date-picker',
  standalone: true,
  imports: [NgPersianDatepickerModule, ReactiveFormsModule, NgClass],
  template: `
    <div class="w-full uikit-wrapper-height" [ngClass]="class">
      <div class="flex align-items-stretch">
        <div class="flex-grow-1">
          <ng-persian-datepicker
            [dateInitValue]="!!value"
            [timeEnable]="timeEnable"
            [timeShowSecond]="timeEnable"
            [dateFormat]="timeEnable ? 'YYYY/MM/DD HH:mm:ss' :'YYYY/MM/DD'"
            [dateGregorianFormat]="timeEnable ? 'YYYY/MM/DD HH:mm:ss' :'YYYY/MM/DD'">
            <span class="p-float-label w-full">
              <input
                [formControl]="control"
                type="text"
                #input
                [value]="value"
                [disabled]="disabled"
                [ngClass]="{'ng-invalid ng-dirty' : control.invalid &&( control.dirty || control.touched)}"
                [style]="{'width':'100%'}"
                (input)="onChanged($event)"
                (blur)="touched()"/>
                <label class="text-1 font-sm-regular">{{label}}</label>
            </span>
          </ng-persian-datepicker>
        </div>
        <span class="flex align-items-center justify-content-center icon cursor-pointer">
          <i class="pi pi-calendar"></i>
        </span>
      </div>
    </div> `,
  styles: [`
    :host ::ng-deep .datepicker-outer-container {
      position: fixed;
      z-index: 10000;
    }

    :host ::ng-deep .p-inputtext {
      border-radius: 0 6px 6px 0;
    }

    .icon {
      background-color: #3B82F6;
      border-radius: 6px 0 0 6px;
      width: 44px;

      i {
        color: white;
      }
    } `]
})
export class CustomJalaliDatePickerComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl

  @Input() timeEnable = false;
  @Input() clearable = true;
  @Input() class: string;
  @Input() label: string;
  @ViewChild('input') input: ElementRef;

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
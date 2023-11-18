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
          #input
          [value]="value"
          [disabled]="disabled"
          (input)="onChanged($event)"
          (blur)="touched()"/>
      </ng-persian-datepicker>
    </div> `,
  styles: [`
    :host ::ng-deep .datepicker-outer-container {
      position: fixed;
      z-index: 10000;
    } `]
})
export class CustomJalaliDatePickerComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl

  @Input() class: string;
  @Input() label: string;

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

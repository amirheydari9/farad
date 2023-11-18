import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule} from "@angular/forms";
import {CustomSwitchComponent} from "./ui-kit/custom-switch/custom-switch.component";
import {CustomRadioComponent, radioOption} from "./ui-kit/custom-radio/custom-radio.component";
import {CustomTextInputComponent} from "./ui-kit/custom-text-input/custom-text-input.component";
import {CustomJalaliDatePickerComponent} from "./ui-kit/custom-jalali-date-picker/custom-jalali-date-picker.component";
import {SvgIconComponent} from "./components/svg-icon/svg-icon.component";
import {StepperComponent} from "./components/stepper/stepper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomSwitchComponent,
    CustomRadioComponent,
    CustomJalaliDatePickerComponent,
    CustomTextInputComponent,
    SvgIconComponent,
    StepperComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'farad';
  form: FormGroup
  formBuilder = inject(FormBuilder)

  @ViewChild(FormGroupDirective) formRef: FormGroupDirective;

  filterOptions: radioOption[] = [
    {label: 'خرید و فروش', value: 1},
    {label: 'رهن و اجاره', value: 2},
    {label: 'وکالتنامه', value: 3},
    {label: 'صلح', value: 4},
    {label: 'تعهدنامه', value: 5},
    {label: 'رضایت‌نامه', value: 6},
    {label: 'سایر', value: 7},
  ]

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: this.formBuilder.control(null),
      finalApproval: this.formBuilder.control(false),
      needToTakeAction: this.formBuilder.control(true),
      fromDate: this.formBuilder.control(null),
      toDate: this.formBuilder.control(null),
      filters: this.formBuilder.control(null)
    })
  }

  handleResetFilter() {
    this.formRef.resetForm()
  }
}

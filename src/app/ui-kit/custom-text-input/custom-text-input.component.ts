import {Component, Input, OnInit, Self} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";

@Component({
  selector: 'app-custom-text-input',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './custom-text-input.component.html',
  styleUrls: ['./custom-text-input.component.scss']
})
export class CustomTextInputComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl;
  @Input() placeholder: string

  constructor(
    @Self() public controlDir: NgControl
  ) {
    super()
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control = this.controlDir.control as FormControl;
  }

  onChanged($event: any): void {
    const value: string = ($event.target as HTMLInputElement).value;
    this.changed(value);
  }
}

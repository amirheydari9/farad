import {Component, Input, OnInit, Self} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {FormControl, FormsModule, NgControl} from "@angular/forms";

export interface radioOption {
  label: string;
  value: string | number
}

@Component({
  selector: 'app-custom-radio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent extends BaseControlValueAccessor<any> implements OnInit {

  control: FormControl;

  @Input() options: radioOption[] = []

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
    this.changed($event);
  }
}

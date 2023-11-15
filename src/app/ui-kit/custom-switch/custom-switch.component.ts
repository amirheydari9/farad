import {Component, Input, OnInit, Self} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {FormControl, FormsModule, NgControl} from "@angular/forms";

@Component({
  selector: 'app-custom-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-switch.component.html',
  styleUrls: ['./custom-switch.component.scss']
})
export class CustomSwitchComponent extends BaseControlValueAccessor<boolean> implements OnInit {

  control: FormControl;
  @Input() public label: string;

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
    this.changed($event.checked);
  }


}

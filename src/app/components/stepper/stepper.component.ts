import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {HStepperComponent} from "../h-stepper/h-stepper.component";

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, SvgIconComponent,HStepperComponent],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

}

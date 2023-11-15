import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgIconComponent} from "../svg-icon/svg-icon.component";

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

}

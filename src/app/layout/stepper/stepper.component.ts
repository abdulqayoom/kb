import { Component } from '@angular/core';
import {
  bookIcon,
  eyeIcon,
  fileAddIcon,
  paperclipIcon,
  userIcon,
} from "@progress/kendo-svg-icons";
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent1 {
  public current = 0;

  public steps = [
    { label: "Personal Info", svgIcon: userIcon },
    { label: "Education", svgIcon: bookIcon },
    { label: "Attachments", svgIcon: paperclipIcon, optional: true },
    { label: "Preview", svgIcon: eyeIcon },
    { label: "Submit", svgIcon: fileAddIcon },
  ];
}

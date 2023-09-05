import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  public checked = true;
  public onFocus(): void {
    this.log("Switch is focused");
  }

  public onBlur(): void {
    this.log("Switch is blurred");
  }

  public onChange(value: string): void {
    this.log(`valueChange ${value}`);
  }

  private log(event: string): void {
    console.log(event)
  }
}

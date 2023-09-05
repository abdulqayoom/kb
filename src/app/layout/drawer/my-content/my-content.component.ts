import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css']
})
export class MyContentComponent {
  @Input() selectedItem: string | undefined;
}

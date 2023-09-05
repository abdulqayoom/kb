import { Component } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  constructor(private notificationService: NotificationService) {

  }
  public showDefault(): void {
    this.notificationService.show({
      content: "Default notification",
      hideAfter: 600,
      position: { horizontal: "right", vertical: "top" },
      animation: { type: "fade", duration: 400 },
      type: { style: "none", icon: false },
    });
  }
  public showSuccess(): void {
    this.notificationService.show({
      content: "Success notification",
      hideAfter: 600,
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "fade", duration: 400 },
      type: { style: "success", icon: true },
    });
  }
  public showWarning(): void {
    this.notificationService.show({
      content: "Warning notification",
      hideAfter: 600,
      position: { horizontal: "left", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "warning", icon: true },
    });
  }
  public showInfo(): void {
    this.notificationService.show({
      content: "Info notification",
      hideAfter: 600,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "info", icon: true },
    });
  }
  public showError(): void {
    this.notificationService.show({
      content: "Error notification",
      hideAfter: 600,
      position: { horizontal: "right", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "error", icon: true },
    });
  }
}


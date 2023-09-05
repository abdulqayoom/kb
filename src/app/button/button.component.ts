import { Component } from '@angular/core';
import {
  SVGIcon,
  gearIcon,
  clipboardIcon,
  plusIcon,
  shareIcon,
  googleIcon,
  redditIcon,
  dribbbleIcon,
  clipboardTextIcon,
  clipboardMarkdownIcon,
  clipboardCodeIcon,
  clockIcon,
  lockIcon,
} from "@progress/kendo-svg-icons";
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  public imageUrl =
    "https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png";
  public gearSVG: SVGIcon = gearIcon;
  public clipboardSVG: SVGIcon = clipboardIcon;
  public plusSVG: SVGIcon = plusIcon;
  public shareSVG: SVGIcon = shareIcon;

  public fabItems = [
    { svgIcon: googleIcon, label: "Google" },
    { svgIcon: redditIcon, label: "Reddit" },
    { svgIcon: dribbbleIcon, label: "Dribbble" },
  ];

  public splitButtonItems = [
    {
      text: "Keep Text Only",
      svgIcon: clipboardTextIcon,
      click: (): void => {
        console.log("Keep Text Only click handler");
      },
    },
    {
      text: "Paste as HTML",
      svgIcon: clipboardCodeIcon,
    },
    {
      text: "Paste Markdown",
      svgIcon: clipboardMarkdownIcon,
    },
    {
      text: "Set Default Paste",
    },
  ];

  public dropDownButtonItems = [
    { text: "My Profile" },
    { text: "Friend Requests" },
    { text: "Account Settings" },
    { text: "Support" },
    { text: "Log Out" },
  ];

  public chips = [
    {
      label: "Alarm",
      svgIcon: clockIcon,
    },
    {
      label: "Lock",
      svgIcon: lockIcon,
    },
  ];

  public onFabClick(): void {
    console.log("Added");
  }

  public onSplitButtonClick(): void {
    console.log("Paste");
  }

  public onSplitButtonItemClick(dataItem: { [key: string]: unknown }): void {
    debugger
    if (dataItem) {
      console.log(dataItem['text']);
    }
  }

  public onButtonClick(): void {
    console.log("click");
  }
}

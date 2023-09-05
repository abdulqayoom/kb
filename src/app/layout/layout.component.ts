import { Component } from '@angular/core';
import { SVGIcon, userIcon, bloggerIcon } from "@progress/kendo-svg-icons";
import { AvatarThemeColor } from "@progress/kendo-angular-layout";
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  public firstContactImage =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg";
  public secondContactImage =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg";
  public userSvg: SVGIcon = userIcon;

  public contactImages: Array<{
    avatar: string;
    name: string;
    position: string;
  }> = [
      {
        avatar: this.firstContactImage,
        name: "Michael Holz",
        position: "Manager",
      },
      {
        avatar: this.secondContactImage,
        name: "André Stewart",
        position: "Product Manager",
      },
    ];

  public contactInitials: Array<{
    avatar: string;
    name: string;
    position: string;
  }> = [
      { avatar: "JS", name: "Jason Smith", position: "UX Designer" },
      { avatar: "GP", name: "George Porter", position: "Software Engineer" },
    ];

  public themeColors: Array<AvatarThemeColor> = [
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse",

  ];
  public bE: SVGIcon = bloggerIcon;
}

import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Validators, FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { SVGIcon, saveIcon, cancelIcon } from "@progress/kendo-svg-icons";
import { PostModel } from "../Model/post";
import { postService } from "../Service/post.service";
@Component({
  selector: 'app-kendo-grid-edit-form',
  templateUrl: './kendo-grid-edit-form.component.html',
  styleUrls: ['./kendo-grid-edit-form.component.css']
})
export class KendoGridEditFormComponent implements OnInit {
  public editForm!: FormGroup;
  public lisItem: any
  public active = false;
  public saveIcon: SVGIcon = saveIcon;
  public cancelIcon: SVGIcon = cancelIcon;
  selectedItem: number | undefined;
  constructor(private fb: FormBuilder, private _post: postService) {
    this.editForm = this.fb.group(
      {
        userId: new FormControl(''),
        title: new FormControl(''),
        body: new FormControl(''),
      })
  }
  ngOnInit(): void {
    this._post.getusers().subscribe((data) => {
      debugger
      this.lisItem = data;
    })
  }


  @Input() public set model(post: PostModel | undefined) {
    debugger
    this.editForm.reset(post);
    debugger

    // toggle the Dialog visibility
    this.active = post !== undefined;
  }
  @Input() isNew!: boolean;
  @Output() cancel: EventEmitter<undefined> = new EventEmitter();
  @Output() save: EventEmitter<PostModel> = new EventEmitter();

  public onSave(e: PointerEvent): void {
    e.preventDefault();
    this.save.emit(this.editForm.value);
    this.active = false;
  }

  public onCancel(e: PointerEvent): void {
    e.preventDefault();
    this.closeForm();
  }

  public closeForm(): void {
    this.active = false;
    this.cancel.emit();
  }

}

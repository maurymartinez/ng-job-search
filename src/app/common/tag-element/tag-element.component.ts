import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {UnescapePipe} from "../pipes/unescape.pipe";

@Component({
  selector: 'njs-common-tag-element',
  standalone: true,
  imports: [
    NgForOf,
    UnescapePipe
  ],
  templateUrl: './tag-element.component.html',
  styleUrl: './tag-element.component.css'
})
export class TagElementComponent {
  @Input() types: string[] = [];
}

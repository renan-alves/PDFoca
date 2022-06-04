import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'commons-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() icon!: IconDefinition;

  @Input() primary: boolean = false;
  @Input() secondary: boolean = false;
  @Input() success: boolean = false;
  @Input() danger: boolean = false;
  @Input() warning: boolean = false;
  @Input() info: boolean = false;

  @Input() borderless: boolean = false;
  @Input() full: boolean = false;
  @Input() big: boolean = false;

  @Output() _click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}

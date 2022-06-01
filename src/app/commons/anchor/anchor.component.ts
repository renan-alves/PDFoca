import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'commons-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {
  @Input() text: string = "";
  @Input() active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

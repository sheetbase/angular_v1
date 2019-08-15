import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sheetbase-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.scss']
})
export class OopsComponent implements OnInit {

  @Input() image = 'https://img.icons8.com/color/96/000000/broken-link.png';
  @Output() goHome: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-two',
  templateUrl: './select-two.component.html',
  styleUrls: ['./select-two.component.css']
})
export class SelectTwoComponent implements OnInit {
  @Input() array;
  @Output()choice = new EventEmitter();
  val;

  constructor() { }

  ngOnInit() {
    this.sendChoice();
  }

  sendChoice() {
    this.choice.emit(this.val);
  }
}

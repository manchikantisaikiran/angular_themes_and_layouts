import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onSettings = new EventEmitter();
  @Output() onMenu = new EventEmitter();
  @Output() onToggleSidebar = new EventEmitter();

}

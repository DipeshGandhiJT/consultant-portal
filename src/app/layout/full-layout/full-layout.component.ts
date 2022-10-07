import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  visibleSidebar: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  showSidebar() {
    this.visibleSidebar = !this.visibleSidebar;
  }
}

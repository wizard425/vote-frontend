import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  template: ''
})
export class BaseComponent implements OnInit {
  isManager: boolean = localStorage.getItem("ismanager") == "true";
  
  constructor() {
  }
  ngOnInit(): void {
  }
}

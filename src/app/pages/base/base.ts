import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.html',
  styleUrls: ['./base.scss']
})

export class BaseComponent implements OnInit {
  redirectTo: '(base:home)'
  constructor() { }

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.css']
})
export class FootersComponent implements OnInit {
    anio: number =new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}

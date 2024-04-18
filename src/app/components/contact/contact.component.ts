import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  copyEmail: string = "flocoswhite@gmail.com";
  copyTell: number = 62993305993;
  
  constructor() { }

  ngOnInit(): void {
  }

}

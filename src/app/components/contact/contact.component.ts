import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  check1: boolean = false;
  copy1: boolean = true;
  check2: boolean = false;
  copy2: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }
  async copiarEmail(){
    try {
      await navigator.clipboard.writeText("flocoswhite@gmail.com");
      this.copy1 = false;
      this.check1 = true;
      setTimeout(() => {
        this.check1 = false;
        this.copy1 = true;
      }, 2500);
    } catch (err){
      console.error("Error:", err);
    }
  }

  async copiarNumero(){
    try {
      await navigator.clipboard.writeText("62993305993");
      this.copy2 = false;
      this.check2 = true;
      setTimeout(() => {
        this.check2 = false;
        this.copy2 = true;
      }, 2500);
    } catch (err){
      console.error("Error:", err);
    }
  }

}

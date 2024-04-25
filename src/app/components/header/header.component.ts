import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  activeSection: string | undefined;

  constructor() {}

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }
    
  
}

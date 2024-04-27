import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  activeSection: string | undefined;

  isNavbarVisible: boolean = false;
  buttonAnimation: boolean = false;

  private clickOutsideListener: any;

  constructor() {}

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }

  HiddenNav(){
    this.isNavbarVisible = !this.isNavbarVisible;
    this.buttonAnimation = !this.buttonAnimation;
    if (this.isNavbarVisible) {
      this.activateClickOutsideListener(); 
    } else {
      this.deactivateClickOutsideListener(); 
    }
  }

  closeNavbar() {
    this.isNavbarVisible = false;
    this.buttonAnimation = false;
    this.deactivateClickOutsideListener();
  } 
  
  onClick(event: MouseEvent) {
      if (!(event.target as HTMLElement).closest('header')) {
          this.closeNavbar();
      }
  }
  
  activateClickOutsideListener() {
    this.clickOutsideListener = this.onClick.bind(this);
    document.addEventListener('click', this.clickOutsideListener);
  }

  deactivateClickOutsideListener() {
    document.removeEventListener('click', this.clickOutsideListener);
  }
}

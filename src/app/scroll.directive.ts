import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @Output() sectionChange = new EventEmitter<string>();

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const sectionHeight = rect.bottom - rect.top;
      const sectionTop = rect.top;

      // Defina a porcentagem de ocupação da tela que considerará como visível
      const visiblePercentage = 0.4;

      // Verifica se a seção está ocupando pelo menos a porcentagem especificada da tela
      if ((sectionTop < screenHeight * (1 - visiblePercentage)) && (sectionTop + sectionHeight > screenHeight * visiblePercentage)) {
        this.sectionChange.emit(section.id);
        return;
      }
    });
  }
}

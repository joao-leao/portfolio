import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimator]'
})
export class ScrollAnimatorDirective {
  @Input() animationClass: string = 'animate';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elementPosition = this.el.nativeElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (elementPosition < viewportHeight) {
      this.renderer.addClass(this.el.nativeElement, this.animationClass);
    }
  }
}

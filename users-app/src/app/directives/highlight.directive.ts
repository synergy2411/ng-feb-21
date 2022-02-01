import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector : '[appHighlight]'
})
export class HighlightDirective{

  @Input() favColor : string;

  @HostBinding('style.backgroundColor') bgColor : string;

  @HostListener('mouseenter') onMouseEnter(){
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.bgColor = 'transparent';
  }

  // constructor(private elementRef : ElementRef){
  //   // console.log(this.elementRef.nativeElement);
  //   this.elementRef.nativeElement.style.backgroundColor = 'grey';
  // }

}


// <div appHighlight></div> : []
// <app-highlight></app-highlight> : ''
// <div class="appHighlight"></div> : '.'

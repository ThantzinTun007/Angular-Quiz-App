import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect : Boolean = false;
  constructor(private ef: ElementRef, private render: Renderer2) { }
  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.ef.nativeElement, 'background', '#56C9C1');
      this.render.setStyle(this.ef.nativeElement, 'color', '#fff');
      this.render.setStyle(this.ef.nativeElement, 'border', '1px solid grey');
    }else{
      this.render.setStyle(this.ef.nativeElement, 'background', '#DC3444');
      this.render.setStyle(this.ef.nativeElement, 'color', '#fff');
      this.render.setStyle(this.ef.nativeElement, 'border', '1px solid grey');
    }
  }

}

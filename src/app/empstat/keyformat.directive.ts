import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appKeyformat]'
})
export class KeyformatDirective {

  constructor(private elr:ElementRef) { }

  @HostListener('keyup')
  onBlur(){
      let data =   this.elr.nativeElement.value.toUpperCase();
      if(data){
          let fdata="";
      for(let i=0;i<data.length;i++){
          fdata +="X";
      }
      this.elr.nativeElement.value = fdata;
    }

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(input: string, maxsize?:number,format?:string): unknown {
    if(format == 'uppercase')
      input = input.toUpperCase();
     if(maxsize){
        input = input.substr(0,maxsize)+"...";
      }else{
        input= input.substr(0,50)+"..."
      }
      return input;
  }

}

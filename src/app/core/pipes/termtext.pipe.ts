import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'termtext'
})
export class TermtextPipe implements PipeTransform {

  transform(value:string,limit:number): string {
    return value.split(" ",limit).join(" ");
  }

}

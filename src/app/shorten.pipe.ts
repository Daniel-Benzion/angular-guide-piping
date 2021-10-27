import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    if (value.length > 10) return value.substr(0, 10) + "...";
    return value;
  }

}

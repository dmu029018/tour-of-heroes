import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'smartTruncate'
})
export class SmartTruncatePipe implements PipeTransform {

  transform(value: string, maxSize: number): string {
    // Dado un texto, lo trunca a un número de caracteres determinado
    return value.substr(0, Math.min(value.length, maxSize));
  }

}

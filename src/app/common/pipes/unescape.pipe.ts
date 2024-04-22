import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'unescape',
  standalone: true
})
export class UnescapePipe implements PipeTransform {
  parser: DOMParser = new DOMParser();

  transform(value: unknown, ...args: unknown[]): unknown {
    let scapeText: string = value?.toString() || '';

    return this.parser.parseFromString(scapeText, 'text/html').documentElement.textContent;
  }

}

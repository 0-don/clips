import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeURL',
})
export class SafeURLPipe implements PipeTransform {
  constructor(private sanitazer: DomSanitizer) {}

  transform(value: string) {
    return this.sanitazer.bypassSecurityTrustUrl(value);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenNumber',
  standalone: true
})
export class ShortenNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1_000_000_000) {
      return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B'; // Billions
    } else if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'; // Millions
    } else if (value >= 1_000) {
      return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'K'; // Thousands
    }
    return value.toString(); // No formatting for numbers < 1000
  }
}

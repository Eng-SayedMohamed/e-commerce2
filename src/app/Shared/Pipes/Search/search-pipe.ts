import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], text: string): any {
    return value.filter((item) =>
      item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
    );
  }
}

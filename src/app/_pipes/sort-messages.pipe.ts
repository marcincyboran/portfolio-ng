import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../interfaces/message';

@Pipe({
  name: 'sortMessages'
})
export class SortMessagesPipe implements PipeTransform {
  transform(value: Array<Message>, args: string): Array<Message> {
    return (value = value.sort((a, b) => {
      const aTime = parseInt(a.created, 10);
      const bTime = parseInt(b.created, 10);
      return aTime < bTime ? 1 : -1;
    }));
  }
}

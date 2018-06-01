import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../interfaces/message';

@Pipe({
  name: 'filterMessages'
})
export class FilterMessagesPipe implements PipeTransform {
  transform(value: Array<Message>, args: string): Array<Message> {
    switch (args) {
      case 'old':
        value = value.filter(message => !message.isNew);
        break;
      case 'new':
        value = value.filter(message => message.isNew);
        break;
      default:
        value = value;
        break;
    }
    return value;
  }
}

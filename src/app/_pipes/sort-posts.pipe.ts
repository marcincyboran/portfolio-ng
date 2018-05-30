import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces/post';

@Pipe({
  name: 'sortPosts'
})
export class SortPostsPipe implements PipeTransform {

  transform(value: Array<Post>, args: string): Array<Post> {
   return value = value.sort((a, b) => {
      const aTime = parseInt(a.created, 10);
      const bTime = parseInt(b.created, 10);
      if (aTime > bTime) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}

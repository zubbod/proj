import { Pipe, PipeTransform } from '@angular/core';
import { ListItem, SortByEnum } from 'src/app/directives/directives.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: ListItem[], search: string = '', sortBy: SortByEnum = SortByEnum.Id): ListItem[] {
    let sortByStr: string;
    switch (sortBy) {
      case SortByEnum.Id:
        sortByStr = 'id';
        break;
      case SortByEnum.Title:
          sortByStr = 'title';
          break;
    }
    if (search === '') {
      return array;
    } else {
      return array.filter(el => el[sortByStr].includes(search));
    }
  }

}

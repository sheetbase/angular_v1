import { Pipe, PipeTransform } from '@angular/core';

import { filter } from '../../utils';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], keyword: string, fields = ['keywords']) {
    return filter(items, keyword, fields);
  }

}

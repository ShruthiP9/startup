import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
  
    if(searchText) {
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.name.toLowerCase().indexOf(searchText) > -1;
    });
   }
   return items;
}
}
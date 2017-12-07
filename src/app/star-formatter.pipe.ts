import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starFormatter'
})
export class StarFormatterPipe implements PipeTransform {

  transform(rating: number, args?: any): any {
    let formattedRating = "";
    let formattedCount: number;

    for(let count = 0; count < rating; count++)
    {
      formattedRating += "&starf;";
      formattedCount = count;
    }

    for(let count = 4; count > formattedCount; count--)
    {
      formattedRating += "&star;";      
    }
    return formattedRating;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avgAge',
  // pure: false
})
export class AvgAgePipe implements PipeTransform {

  transform(users: any[], defaultValue = 0, start = 0): number {
    const sum = users.reduce((acc, curr) => acc + curr.age, start);
    return (sum === start) ? defaultValue : sum / users.length;
  }

}

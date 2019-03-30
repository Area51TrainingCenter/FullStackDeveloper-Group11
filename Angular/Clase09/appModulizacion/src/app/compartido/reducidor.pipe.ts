import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reducidor'
})
export class ReducidorPipe implements PipeTransform {

  transform(value: string): string {
    const arr = value.split(" ")
    const nuevo = arr.slice(0, 10)
    return nuevo.join(" ")
  }

}

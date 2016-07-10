import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({name: 'keys'})

export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    if (!value) {
      return value;
    }

    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]);
    }
    return keys;
  }
}

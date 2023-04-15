import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/Student';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Student): string {
    return `${value.firstName} ${value.lastName}`;
  }

}

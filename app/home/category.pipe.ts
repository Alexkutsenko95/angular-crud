import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'position' })
export class PositionPipe implements PipeTransform {
    transform(employees: any, searchText: any): any {
        if(searchText == null) return employees;

        return employees.filter(function(employee:any){
            return employee.position.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
    }
}
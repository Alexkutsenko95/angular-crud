import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { User, Employee } from '../_models/index';
import { UserService, EmployeeService,AlertService } from '../_services/index';
// import {win} from "@angular/platform-browser/src/browser/tools/browser";
import { PositionPipe } from './category.pipe';
import { OrderrByPipe } from './order.by.pipe';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    providers: [UserService, EmployeeService],
})

export class HomeComponent implements OnInit {
    model: any = {};
        currentUser: User;
    users: User[] = [];
    employees: Employee[] =[];
    direction: number;
    isDesc: boolean = false;
    column: string = 'PositionName';
    // loading = false;
    constructor(private userService: UserService ,private employeeService: EmployeeService
        ,private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }


// Change sort function to this:
//     sort(property){
//         this.isDesc = !this.isDesc; //change the direction
//         this.column = property;
//         let direction = this.isDesc ? 1 : -1;
//
//         this.employees.sort(function(a, b){
//             if(a[property] < b[property]){
//                 return -1 * direction;
//             }
//             else if( a[property] > b[property]){
//                 return 1 * direction;
//             }
//             else{
//                 return 0;
//             }
//         });
//     };


    sort(property:any){
        this.isDesc = !this.isDesc; //change the direction
        this.column = property;
        let direction = this.isDesc ? 1 : -1;


        this.employees.sort(function(a, b){
            if(a[property] < b[property]){
                return -1 * direction;
            }
            else if( a[property] > b[property]){
                return 1 * direction;
            }
            else{
                return 0;
            }
        });

    }


    ngOnInit() {
        this.loadAllUsers();
         this.loadAllEmployees();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    deleteEmployee(id: number) {
        this.employeeService.delete(id).subscribe(() => { this.loadAllEmployees() });
    }

    private loadAllEmployees() {
        this.employeeService.getAll().subscribe(employees => { this.employees = employees; });
    }

    register() {
        // this.loading = true;
        this.employeeService.create(this.model).subscribe(() => { this.loadAllEmployees() });
    }


    // deleteEmployee(id: number) {
    //     this.employeeService.delete(id).subscribe(() => { this.loadAllEmployees() });
    // }



}
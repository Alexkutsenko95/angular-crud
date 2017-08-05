import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Employee } from '../_models/index';

@Injectable()
export class EmployeeService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/employees').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/employees/' + id).map((response: Response) => response.json());
    }

    create(employee: Employee) {
        return this.http.post('/api/employees', employee).map((response: Response) => response.json());
    }

    update(employee: Employee) {
        return this.http.put('/api/employees/' + employee.id, employee,).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/employees/' + id).map((response: Response) => response.json());
    }

    // private helper methods


}
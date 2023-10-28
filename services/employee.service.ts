import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  search = new BehaviorSubject(" ")
  constructor(private http: HttpClient) { }

  //api call :
  getAllEmployee() {
    return this.http.get('http://localhost:3000/employee')
  }
  addEmployee(empObject: any) {
    return this.http.post('http://localhost:3000/employee', empObject)
  }
  deleteEmployee(empId: any) {
    return this.http.delete('http://localhost:3000/employee/' + empId)
  }
  getEmployee(empId: any) {
    return this.http.get('http://localhost:3000/employee/' + empId)
  }
  updateEmployee(empId: any, empObject: any) {
    return this.http.put('http://localhost:3000/employee/' + empId, empObject);
  }
}

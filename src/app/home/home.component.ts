import { Component } from '@angular/core';
import { EmployeeService } from 'services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm:any=''
  empArray: any = []
  empid: any
  constructor(private es: EmployeeService,private router:Router) { }
  ngOnInit(): void {
    this.es.getAllEmployee().subscribe((result: any) => {

      this.empArray = result
      console.log(this.empArray);


    })
  }
  search(event:any){
    this.searchTerm=event.target.value
    this.es.search.next(this.searchTerm)
  }
  deleteEmp(empId: any) {
    console.log(empId);
    this.es.deleteEmployee(empId).subscribe((result:any)=>{
      alert("employee deleted")
      this.router.navigateByUrl("")
    })

  }
}

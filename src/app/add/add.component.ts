import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  url: any
  constructor(private fb: FormBuilder, private es:EmployeeService,private router:Router) { }
  empForm = this.fb.group({
    empId: [''],
    empName: [''],
    email: [''],
    Mobile: ['']
  })
  onselectFile(files: FileList | null) {
    if (files) {
      var reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = (event: Event) => {
        let fileReader = event.target as FileReader
        this.url = fileReader.result;
      }
    }
  }
  add() {
    var path = this.empForm.value
    var empData = {
      empId: path.empId,
      empName: path.empName,
      email: path.email,
      Mobile: path.Mobile,
      image: this.url
    }
    console.log(empData);
    
    this.es.addEmployee(empData).subscribe((result:any)=>{
      alert("Successfully added employee");
      this.router.navigateByUrl('')
    })
    
  }
}

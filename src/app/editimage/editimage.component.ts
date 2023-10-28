import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'services/employee.service';

@Component({
  selector: 'app-editimage',
  templateUrl: './editimage.component.html',
  styleUrls: ['./editimage.component.css']
})
export class EditimageComponent {
  id: any;
  edata: any;
  url: any;
  empForm: FormGroup; // Define a form group

  constructor(private ar: ActivatedRoute, private es: EmployeeService, private router: Router, private fb: FormBuilder) {
    this.empForm = this.fb.group({
      empId: [''],
      empName: [''],
      email: [''],
      Mobile: [''],
      image: ['']
    });
  }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.id = data.id;
    });

    this.es.getEmployee(this.id).subscribe((result: any) => {
      this.edata = result;
      this.empForm.patchValue(this.edata); // Use patchValue to update form controls with data
      this.url = this.edata.image;
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.url = e.target.result;
        this.empForm.patchValue({
          image: this.url
        });
      };
    }
  }

  editEmployee() {
    const updatedEmployee = this.empForm.value;
    this.es.updateEmployee(this.id, updatedEmployee).subscribe((result: any) => {
      alert('Dp  is updated');
      this.router.navigateByUrl('');
    });
  }
}

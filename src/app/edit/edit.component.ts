import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from 'services/employee.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
id:any
edata:any
url:any
constructor(private ar:ActivatedRoute,private es:EmployeeService,private router:Router){}
ngOnInit():void{
  this.ar.params.subscribe((data:any)=>{
    this.id=data.id
    console.log(this.id);
    })
    this.es.getEmployee(this.id).subscribe((result:any)=>{
      this.edata=result
      console.log(this.edata);
      
    })
}
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
editEmployee(){
  
    this.es.updateEmployee(this.id,this.edata).subscribe((result:any)=>{
      alert('Employee data is updated')
      this.router.navigateByUrl('')
    })
   
}
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(empArray:any[],searchString:string,propName:string):any  {
    const result:any=[]
    if(!empArray||searchString==""||propName==" "){
        return empArray
    }
    else{
      empArray.forEach((item:any)=>{
        if(item[propName].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }

  }

}

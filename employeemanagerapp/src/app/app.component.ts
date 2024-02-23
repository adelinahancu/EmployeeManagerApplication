import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 

  

})
export class AppComponent implements OnInit{
  public employees: Employee[];
  
  constructor(private employeeService:EmployeeService){
    this.employees=[];
  }
  ngOnInit(){
    this.getEmployees();
  }

  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
    (response:Employee[])=> {
              this.employees = response;
         },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
    );
  }



}

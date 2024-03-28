import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  inputObj={name:'',email:'',phone:''};

  constructor(public cs:CrudService, public rt:Router) {}

  addInfo()
  {
    this.cs.addUser(this.inputObj).subscribe();
    this.rt.navigate(['list']);
  }

}
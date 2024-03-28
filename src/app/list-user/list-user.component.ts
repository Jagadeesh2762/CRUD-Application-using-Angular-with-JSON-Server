import { Component } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

ulist:any=[];

constructor(public cs:CrudService) {}

ngOnInit()
{
  this.fetchAllUsers();
}

fetchAllUsers()
{
  this.cs.getAllUsers().subscribe(res => {
  this.ulist=res;
  });
}

removeUser(i:number)
{
  if(confirm("Are you delete this user?"))
  {
    this.cs.deleteUser(i).subscribe();
    this.fetchAllUsers();
  }
}

}
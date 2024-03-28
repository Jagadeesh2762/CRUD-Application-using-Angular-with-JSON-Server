import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
 user!:User;
 id:any;
 constructor (public cs:CrudService,public route:Router,public ar:ActivatedRoute) {}

 ngOnInit(){
  this.id= this.ar.snapshot.params['param1']
  this.fetchSingleUser(this.id);
 }

 fetchSingleUser(id:number){
  this.cs.getSingleUser(id).subscribe(res=>{
   this.user=res;
  });
 }
 
 updateInfo(){
  if(confirm("Are you sure want to update")){
    this.cs.updateUser(this.id,this.user).subscribe();
    alert("Updated Successfully...")
  }
 }

}
class User{
  name!:string;
  email!:string;
  phone!:string;
}


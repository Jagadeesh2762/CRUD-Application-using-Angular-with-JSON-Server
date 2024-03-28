import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  endpoint="http://localhost:3000/users/";

  constructor(private hc:HttpClient) { }

  user!:User;

  addUser(data:any)
  {
    return this.hc.post(this.endpoint,data);
  }
  getAllUsers()
  {
    return this.hc.get(this.endpoint);
  }
  getSingleUser(id:number)
  {
    return this.hc.get<User>(this.endpoint+id);
  }
  deleteUser(id:number)
  {
    return this.hc.delete(this.endpoint+id);
  }
  updateUser(id:number,data:any)
  {
    return this.hc.put(this.endpoint+id,data);
  }
}
class User{
  name!:string;
  email!:string;
  phone!:string;
}

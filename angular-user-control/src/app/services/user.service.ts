import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersApi } from '../interfaces/users-api.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<UsersApi[]>([]);
  public users$ = this.usersSubject.asObservable();

  setUsers(users: UsersApi[]) {
    this.usersSubject.next(users);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { User } from '../models/user.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private KEY = 'user';
  private _user!: User;

  private _user$ = new BehaviorSubject<User>(
    this.UtilsService.load(this.KEY) || null
  );
  public user$ = this._user$.asObservable();

  constructor(private UtilsService: UtilsService) {}

  public signup(name: string) {
    let user = this.UtilsService.load(this.KEY);
    if (!user) {
      let newUser = new User();
      newUser.name = name;
      this.UtilsService.store(this.KEY, newUser);
      this._user = newUser;
    }
    this._user$.next(this._user);
    return of();
  }

  public getUser() {
    const user = this.UtilsService.load(this.KEY)
    return user
    // return {
    //   name: 'Ochoa Hyde',
    //   coins: 100,
    //   moves: [],
    // };
    // return this.user$;
  }
}

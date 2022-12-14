import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user!: User;

  constructor(private UserService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = new User();
  }
  async signUp() {
    await this.UserService.signup(this.user.name).toPromise();
    this.router.navigate(['home']);
  }
}

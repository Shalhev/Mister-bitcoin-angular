import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  user!: User;
  user$!: Observable<User>;
  // userSubscription: Subscription;
  rate!: number;

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.user$ = this.userService.user$;
    if (this.user)
      this.bitcoinService
        .getRate(this.user.coins)
        .subscribe((rate) => (this.rate = rate));
    //  this.bitcoinService.getRate(this.user.coins).subscribe((rate) => (this.rate = rate));
  }
}

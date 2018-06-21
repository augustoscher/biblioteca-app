import {Component, HostBinding, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {routerAnimation} from '../../utils/page.animation';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [routerAnimation]
})
export class LoginPageComponent implements OnInit {
  
  loading = false;
  error: string;
  redirectUrl: string;

  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private userService: UserService) {
      this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
}

ngOnInit(): void {
  this.userService.logout();
}

  /**
   * Login method
   * @param login
   * @param password
   */
  login(login, password) {
    this.loading = true;

    this.authenticationService.login(login, password)
      .subscribe(
        result => {
          this.loading = false;

          if (result) {
            this.userService.login(result);
            this.navigateAfterSuccess();
          } else {
            this.error = 'Username or password is incorrect';
          }
        },
        error => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }

  private navigateAfterSuccess() {
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['/main/dashboard']);
    }
  }

  




}

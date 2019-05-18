import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../models/login.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    loginModel: ILogin = {
        login: '',
        password: ''
    };
    loading = false;
    returnUrl?: string;
    hide = true;
    constructor(private authService: AuthenticationService, private router: Router, private snackBarService: SnackBarService) {

     }

    ngOnInit(): void {
        this.authService.logout();
        this.returnUrl = '/';
    }

    login(): void {
        this.loading = true;
        this.authService.login(this.loginModel.login, this.loginModel.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.snackBarService.show(error.message);
                    this.loading = false;
                });
    }
}

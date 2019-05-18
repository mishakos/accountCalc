import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IToken } from '../models/token.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    private isAuth: boolean;
    private tokenName = 'PAS';
    constructor(private http: HttpClient) {

    }
    private getToken(): IToken {
        return JSON.parse(localStorage.getItem(this.tokenName));
    }

    private setToken(token: IToken): void {
        localStorage.setItem(this.tokenName, JSON.stringify(token));
    }

    tokenIsActive(): boolean {
        const user: IToken = this.getToken();
        if (user && user.token && new Date(user.expiration) > new Date()) {
            return true;
        }
        return false;
    }
    jwt(): HttpHeaders {
        // create authorization header with jwt token
        const currentUser: IToken = this.getToken();
        if (this.tokenIsActive()) {
            const headers: HttpHeaders = new HttpHeaders({ Authorization: 'Bearer ' + currentUser.token });
            return headers;
        }
        return new HttpHeaders();
    }
    login(username: string, password: string): Observable<IToken> {
        const data: any = {
            userName: username,
            password
        };
        return this.http.post<IToken>('/api/auth/token', data).pipe(
            map((response: IToken) => {
                // login successful if there's a jwt token in the response
                const user: IToken = response;
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.setToken(user);
                    this.isAuth = true;
                }

                return user;
            }));
    }

    logout(): void {
        // remove user from session storage to log user out
        localStorage.removeItem(this.tokenName);
        this.isAuth = false;
    }

    isAuthenticated(): boolean {
        if (!this.tokenIsActive()) {
            this.logout();
        }
        return this.isAuth;
    }
}

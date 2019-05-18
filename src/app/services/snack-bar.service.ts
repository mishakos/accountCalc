import { Injectable, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {
    private duration = 3000;
    private action = 'Закрити';
    constructor(private snackBar: MatSnackBar) {

    }

    show(message: string): void {
        this.snackBar.open(message, this.action, {
            duration: this.duration
        });
    }
}

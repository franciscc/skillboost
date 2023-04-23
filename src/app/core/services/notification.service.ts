import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService{

  private obs$ = new Subject<string>();

  constructor(
    private _snackBar : MatSnackBar
  ) { 
    this.obs$.subscribe(x => this._snackBar.open(x, 'Close', {
      duration: 1000,
    }));
  }

  SendNotification(msg : string): void {
    this.obs$.next(msg);
  }
}

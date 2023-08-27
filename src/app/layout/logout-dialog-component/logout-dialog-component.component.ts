import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-dialog',
  template: `
    <div style="width:300px, height:200px">
    <h2 style="text-align:center">Logout Confirmation</h2>
    <p style="text-align:center">Are you sure you want to log out?</p>
    <button mat-button (click)="closeDialog(false)" style="margin-left:10px">Cancel</button>
    <button mat-button color="warn" (click)="closeDialog(true)" style="margin-left:100px">Logout</button>

  `,
})
export class LogoutDialogComponent {
  constructor(private dialogRef: MatDialogRef<LogoutDialogComponent>) {}

  closeDialog(logoutConfirmed: boolean): void {
    this.dialogRef.close(logoutConfirmed);
  }
}

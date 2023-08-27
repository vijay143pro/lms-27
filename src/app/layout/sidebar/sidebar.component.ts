import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog-component/logout-dialog-component.component'; // Update the path
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(public dialog: MatDialog, private router:Router, private toastr:ToastrService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '300px',
      height:'150px',

    });

    dialogRef.afterClosed().subscribe(logoutConfirmed => {
      if (logoutConfirmed) {
        localStorage.removeItem("userData");
        localStorage.removeItem("userId")
        this.toastr.success("Logout successful")
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 1500);
        
      }
    });
  }
}

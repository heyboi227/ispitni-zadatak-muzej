import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  profileOpened: boolean = false;

  constructor(
    public userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  openProfile(userId: number): void {
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: '35vw',
      data: { user: this.userService.getUserById(userId) },
    });

    profileDialog.afterClosed().subscribe(() => {
      this.profileOpened = false;
    });
  }

  signOut(): void {
    if (confirm('Da li ste sigurni da želite da se odjavite?')) {
      this.userService.isSignedIn = false;
      this.userService.currentUser = null;
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void { }

  loggedInCheck(): void {
    if (!this.userService.isSignedIn) {
      alert('Morate biti ulogovani da biste dodali novi oglas!');
      this.router.navigate(['/login']);
    }
  }

  toFooter(): void {
    document.getElementById("footer-container").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}

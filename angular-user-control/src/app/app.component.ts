import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    LoginPageComponent,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(public router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.markerUser.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.markerUser.set(null);
      }
      console.log(this.authService.markerUser());
    });
  }

  onGoLogin() {
    this.router.navigate(['login']);
  }

  onGoRegister() {
    this.router.navigate(['register']);
  }
}

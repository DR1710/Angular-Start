import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-dark bg-dark'>
    <a class='navbar-brand'>{{pageTitle}}</a>

    <ul class="navbar-nav ml-auto" >
    <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li class="nav-item">
        <a href="/register" class="nav-link" routerLink="register">Sign Up</a>
      </li>
      <li class="nav-item">
        <a href="/login" class="nav-link" routerLink="login">Login</a>
      </li>

      <li><a class='nav-link' routerLink='/products'>Product List</a></li>

    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Product Management';
}

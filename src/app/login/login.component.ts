import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_DETAILS } from '../app-routing.constantes';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  login: string;

  handleInputLoginChangeEvent(event) {
    this.login = event.target.value;
    console.log(this.login);
  }

  navigateToDetails() {
    this.router.navigate([PATH_DETAILS, this.login])
  }

  afficherErreurLogin() {
    alert('Veuillez entrer un login.');
  }

  ngOnInit() {
  }

}

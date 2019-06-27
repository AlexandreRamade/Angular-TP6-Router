import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }


  findUserByLogin(login: string) {
    console.log('Login recherché :', login);
    this.userService.findUserByLogin(login).then(result => this.user = result);
  }

  ngOnInit() {
    console.log('detailsComponent');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.findUserByLogin(params.get('login'));
    });
  }


}

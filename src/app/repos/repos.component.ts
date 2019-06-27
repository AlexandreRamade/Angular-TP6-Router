import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) { }


  repos: Array<string>;



  ngOnInit() {
    this.repos = this.userService.repos;
    console.log('reposComponent:', this.repos)
  }

}

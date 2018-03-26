import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users = [];
  searchStr = '';
  constructor(private userService: UsersService) {
  }
  ngOnInit() {
    this.userService.getUsers().subscribe( users => {
      this.users = users;
    });
  }

}

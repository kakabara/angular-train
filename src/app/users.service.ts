import { Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  size = 8;
  constructor(private http: Http) {}

  setSize(size) {
    this.size = size;
  }

  getUsers() {
    return this.http.get(`https://randomuser.me/api/?inc=gender,name,picture,location&results=${this.size}&nat=gb`)
      .map( response => response.json() )
      .map( response => response.results )
      .map( users => {
        return users.map(user => {
          return {
            name: `${user.name.first} ${user.name.last}`,
            image: `${user.picture.large}`,
            geo: `${user.location.city} ${user.location.state} ${user.location.street}`
          }
        })
      }
  );
  }
}

import { Component, OnInit } from '@angular/core';
import { first, from, Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'pipe-operators',
  templateUrl: './pipe-operators.component.html',
  styles: [
  ]
})
export class PipeOperatorsComponent implements OnInit {

  users$: Observable<User> = from([
    {
      _id: '1',
      firstName: 'Natan',
      lastName: 'Semo',
      age: 22,
      phone: '050-0000000',
      email: 'user@gmail.com',
    },
    {
      _id: '2',
      firstName: 'Moshe',
      lastName: 'Admin',
      age: 25,
      phone: '050-0000000',
      email: 'moshe@gmail.com',
    },
    {
      _id: '3',
      firstName: 'Shani',
      lastName: 'Levi',
      age: 28,
      phone: '050-0000000',
      email: 'shani@gmail.com',
    },
  ]);

  users: Array<User> = [];
  user: User | void = undefined;

  ngOnInit(): void {
    this.getFirstUser();
  }

  private getFirstUser() {
    this.users$.pipe(first()).subscribe((data) => {
      this.user = data;
    });
  }
}

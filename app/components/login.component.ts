import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'login',
  templateUrl: 'app/components/login.component.html'
})

export class Login {
  private model = {'username': '', 'password': ''};
  private currentUserName;

  onSubmit() {

  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  selectedFlag: string = 'region'; // Initial button label

  changeFlag(flag: string) {
    this.selectedFlag = flag;
  }
}

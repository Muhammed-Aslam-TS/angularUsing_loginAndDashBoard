import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bsr',
  templateUrl: './side-bsr.component.html',
  styleUrls: ['./side-bsr.component.css']
})
export class SideBsrComponent {

  // showButton = false;

  // show() {
  //   this.showButton = true;
  // }
  // hide() {
  //   this.showButton = true
  // }

  showContent = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-task';
  modalVisible: boolean = false

  closeModal() {
    this.modalVisible = false
  }

  openModal() {
    this.modalVisible = true
  }
}

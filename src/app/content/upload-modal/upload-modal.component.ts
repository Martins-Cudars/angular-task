import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss']
})
export class UploadModalComponent implements OnInit {
  @Output() onCloseModal = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.onCloseModal.emit()
  }

}

import { Component, ViewChild, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss']
})
export class UploadModalComponent implements OnInit {
  @ViewChild("uploadDrop", { static: false }) uploadDrop: ElementRef;
  @Output() onCloseModal = new EventEmitter()
  files: any[] = []
  testVar: string = 'test'

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.onCloseModal.emit()
  }

  onFileDropped($event) {
    console.log('onFileDropped')
    this.prepareFilesList($event)
  }

  uploadHandler(files) {
    console.log('uploadHandler')
    this.prepareFilesList(files)
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0
      this.files.push(item)
    }
    this.uploadDrop.nativeElement.value = "";
    console.log(this.files)
    // this.uploadFilesSimulator(0)
  }


}

import { Component, ViewChild, ElementRef, OnInit, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss']
})
export class UploadModalComponent implements OnInit {
  @ViewChild("uploadDrop", { static: false }) uploadDrop: ElementRef;
  @Output() onCloseModal = new EventEmitter()
  files: any[] = []

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'modal-open');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

  closeModal() {
    this.onCloseModal.emit()
  }

  onFileDropped($event) {
    this.prepareFilesList($event)
  }

  uploadHandler(files) {
    this.prepareFilesList(files)
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0
      this.files.push(item)
    }
    this.uploadDrop.nativeElement.value = "";
    console.log(this.files)
  }


}

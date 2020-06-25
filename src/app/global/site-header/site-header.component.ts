import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  @Output() onOpenModal = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  navigation: any[] = [
    {
      title: 'Pricing',
      href: '#pricing',
      openModalOnClick: false,
      icon: null,
      showIconOnMobile: false
    },
    {
      title: 'Upload',
      href: '#upload',
      openModalOnClick: true,
      icon: 'assets/global/upload.svg',
      showIconOnMobile: true
    }
  ]

  openModal() {
    console.log('openmodal')
    this.onOpenModal.emit()
  }

}

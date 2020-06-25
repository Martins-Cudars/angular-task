import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigation: any[] = [
    {
      title: 'Pricing',
      href: '#pricing',
      icon: null,
      showIconOnMobile: false
    },
    {
      title: 'Upload',
      href: '#upload',
      icon: 'assets/global/upload.svg',
      showIconOnMobile: true
    }
  ]

}

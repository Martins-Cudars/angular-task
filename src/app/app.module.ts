import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SiteHeaderComponent } from './global/site-header/site-header.component'
import { SiteFooterComponent } from './global/site-footer/site-footer.component'
import { ContentHeroComponent } from './content/hero/content-hero.component'
import { PricingComponent } from './content/pricing/pricing.component'
import { PricingService } from './content/pricing/pricing.service'

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    ContentHeroComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PricingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

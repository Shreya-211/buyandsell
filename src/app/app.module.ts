import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { KhimProfileComponent } from './khim-profile/khim-profile.component';
import { BehzadProfileComponent } from './behzad-profile/behzad-profile.component';
import { ShreyaProfileComponent } from './shreya-profile/shreya-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OurTeamComponent,
    PageNotFoundComponent,
    KhimProfileComponent,
    BehzadProfileComponent,
    ShreyaProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

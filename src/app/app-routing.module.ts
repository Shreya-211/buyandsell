import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { KhimProfileComponent } from './khim-profile/khim-profile.component';
import { BehzadProfileComponent } from './behzad-profile/behzad-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShreyaProfileComponent } from './shreya-profile/shreya-profile.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'our-team', component: OurTeamComponent },
	{ path: 'our-team/khim', component: KhimProfileComponent},
	{ path: 'our-team/behzad', component: BehzadProfileComponent},
	{ path: 'our-team/shreya', component: ShreyaProfileComponent},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

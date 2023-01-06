import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/userform', pathMatch: 'full' },
  { path: 'userform', component: UserFormComponent },
  { path: 'userdetails', component: UserDetailsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  UserDetailsComponent,
  UserFormComponent,
  SettingsComponent,
];

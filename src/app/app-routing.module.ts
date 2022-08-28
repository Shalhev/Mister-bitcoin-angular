import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contacts/contacts.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactResolver } from './services/contact-resolver.service';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
    // canActivate: [AuthGuard]
},
  { path: "signup", component: SignupComponent },
  { path: "contacts", component: ContactPageComponent },
  { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolver } },
  { path: 'edit', component: ContactEditComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

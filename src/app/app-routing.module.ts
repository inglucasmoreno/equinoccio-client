import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IntroComponent},
  { path: 'home', component: HomeComponent},
  { path: 'products-services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

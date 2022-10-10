import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ExitComponent } from './exit/exit.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
  {
    path:"",redirectTo:"home",pathMatch:"full"
  },
  { 
  path:"home",component:HomeComponent
 },
 {
  path:"book",component:BookComponent
 },
 {
  path:"print",component:PrintComponent
 },
 {
  path:"exit",component:ExitComponent
 },
 {
  path:"**",component:NotfoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

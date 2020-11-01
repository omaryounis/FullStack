import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_gaurds/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'**',component:HomeComponent,pathMatch:'full'},
  {path:'member-list',component:MemberListComponent,canActivate:[AuthGuard]},
  {path:'member-list/:id',component:MemberDetailComponent},
  {path:'list',component:ListsComponent},
  {path:'message',component:MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

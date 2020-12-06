import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_gaurds/auth.guard';
import { TestErrorComponent } from './errors/test-error.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[      
        {path: '', component: HomeComponent},
        {path:'member-list',component:MemberListComponent,canActivate:[AuthGuard]},
        {path:'member-list/:id',component:MemberDetailComponent},
        {path:'list',component:ListsComponent},
        {path:'message',component:MessagesComponent}
    ]
  },
  {path:'testerror',component : TestErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

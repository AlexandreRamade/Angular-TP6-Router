import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { DetailsComponent } from './details/details.component';
import { ReposComponent } from './repos/repos.component';
import { FollowersComponent } from './followers/followers.component';
import { PATH_HOME, PATH_DETAILS, PATH_DETAILS_REPOS, PATH_DETAILS_FOLLOWERS } from './app-routing.constantes';


const routes: Routes = [
  {path: PATH_HOME, component: LoginComponent },
  {path: PATH_DETAILS + '/:login', component: DetailsComponent, 
    children: [
      {path: '', pathMatch: 'full', redirectTo: PATH_DETAILS_REPOS},
      {path: PATH_DETAILS_REPOS, component: ReposComponent},
      {path: PATH_DETAILS_FOLLOWERS, component: FollowersComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

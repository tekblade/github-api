import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { DetailRepositoryComponent } from './detail-repository/detail-repository.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: 'main',component: MainComponent},
  {path: '', redirectTo:'/main', pathMatch:'full'}, 
  {path: 'user/:id',component:RepositoriesComponent},
  {path:'user/:user/:repository',component:DetailRepositoryComponent},
  {path:'**',component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

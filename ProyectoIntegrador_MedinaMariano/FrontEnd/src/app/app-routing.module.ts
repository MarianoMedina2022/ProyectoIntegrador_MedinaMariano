import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillsComponent } from './components/hardyskills/edit-skills.component';
import { NewSkillsComponent } from './components/hardyskills/new-skills.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},
  {path:'editexp/:id',component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillsComponent},
  { path: 'editskill/:id', component: EditSkillsComponent}

  //{path: '', redirectTo: '/inicio, pathMatch: 'full'}
  //{path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

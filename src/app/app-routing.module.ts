import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

  {path: 'home',component:HomeComponent},
  {path: 'precios',component: PreciosComponent},
  {path: 'protegida',component:ProtegidaComponent,
  canActivate: [AuthGuard]
},
  //Nombre que va llegar en el dashboard de atuh0
  {path: 'callback',component:CallbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

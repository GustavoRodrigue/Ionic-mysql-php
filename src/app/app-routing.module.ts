import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'mostrar-usuario',
    loadChildren: () => import('./mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'add-usuario/:id/:nome/:usuario/:senha/:nivel',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'mostrar-usuario/:id/:nome/:usuario/:senha/:nivel',
    loadChildren: () => import('./mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

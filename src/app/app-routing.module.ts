import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
 { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
 },
];
@NgModule({ 
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}





// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//   {
//     path: 'tabs',
//     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
//   },

//   {path: '',  '' component: LoginComponent },
// ];
// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}


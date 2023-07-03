import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { CustomPreloadStrategyService } from './services/custom-preload-strategy.service';

const routes: Routes = [
  {
    path:'',loadChildren: () => import ( "./Components/layout/layout.module").then(m => m.LayoutModule), data: {preload:true, preloadDelay:4000}
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: CustomPreloadStrategyService //PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

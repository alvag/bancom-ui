import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';
import { CheckboxPageComponent } from './pages/checkbox-page/checkbox-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { SwitchPageComponent } from './pages/switch-page/switch-page.component';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsPageComponent,
  },
  {
    path: 'inputs',
    component: InputsPageComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxPageComponent,
  },
  {
    path: 'select',
    component: SelectPageComponent,
  },
  {
    path: 'switch',
    component: SwitchPageComponent,
  },
  {
    path: '**',
    redirectTo: 'buttons',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

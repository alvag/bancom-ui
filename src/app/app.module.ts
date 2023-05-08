import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BcInputComponent } from './components/bc-input/bc-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { BcCheckboxComponent } from './components/bc-checkbox/bc-checkbox.component';
import { BcSelectComponent } from './components/bc-select/bc-select.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';
import { CheckboxPageComponent } from './pages/checkbox-page/checkbox-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';

@NgModule({
  declarations: [AppComponent, ButtonsPageComponent, InputsPageComponent, CheckboxPageComponent, SelectPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BcInputComponent,
    ReactiveFormsModule,
    ControlMessagesComponent,
    BcCheckboxComponent,
    BcSelectComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BcInputComponent } from './components/bc-input/bc-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { BcCheckboxComponent } from './components/bc-checkbox/bc-checkbox.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { BcSelectComponent } from './components/bc-select/bc-select.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsComponent,
    BcInputComponent,
    ReactiveFormsModule,
    ControlMessagesComponent,
    InputsComponent,
    BcCheckboxComponent,
    CheckboxComponent,
    BcSelectComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

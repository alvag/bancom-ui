import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { SwitchPageComponent } from './pages/switch-page/switch-page.component';
import { BcSwitchComponent } from './components/bc-switch/bc-switch.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { ModalServiceModule } from './services/modal-service/modal-service.module';
import { SliderPageComponent } from './pages/slider-page/slider-page.component';
import { BcSliderComponent } from './components/bc-slider/bc-slider.component';
import { OtpInputPageComponent } from './pages/otp-input-page/otp-input-page.component';
import { BcOtpInputComponent } from './components/bc-otp-input/bc-otp-input.component';
import { SpinnerPageComponent } from './pages/spinner-page/spinner-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsPageComponent,
    InputsPageComponent,
    CheckboxPageComponent,
    SelectPageComponent,
    SwitchPageComponent,
    ModalPageComponent,
    SliderPageComponent,
    OtpInputPageComponent,
    SpinnerPageComponent,
    // AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BcInputComponent,
    ReactiveFormsModule,
    ControlMessagesComponent,
    BcCheckboxComponent,
    BcSelectComponent,
    BcSwitchComponent,
    ModalServiceModule.forRoot(),
    BcSliderComponent,
    BcOtpInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    // AdDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-input-page',
  templateUrl: './otp-input-page.component.html',
  styleUrls: ['./otp-input-page.component.scss']
})
export class OtpInputPageComponent implements OnInit {

  control = new FormControl('', Validators.required);

  ngOnInit(): void {

  }

  sendOpt() {
    console.log(this.control.value);
  }
}

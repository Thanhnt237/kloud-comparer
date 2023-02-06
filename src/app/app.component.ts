import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {KloudNotificationService} from "./Components/kloud-notification/kloud-notification.service";
import * as moment from 'moment-timezone'

const DateFormat: any = {
  parse: {
    dateInput: 'DDMMYYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _kloudNoti: KloudNotificationService,
  ) {
  }
  compareForm: FormGroup = this._formBuilder.group({
    compareDate: new FormControl(moment().format('DDMMYYYY'), [Validators.required]),
  })
}

import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css'],
  template: '',
})
export class AddDeviceComponent implements OnInit {
  device;
  constructor() {

  }
  title = 'Add Device';
  devicenumber = new FormControl('');
  macID = new FormControl('');
  customerNamae = new FormControl('');
  shiptono = new FormControl('');
  addDevice() {
    this.device = {};
    this.device.devicenumber = this.devicenumber;
    // this.device.macid = this.macID;
    // this.device.customerName = this.customerNamae;
    // this.device.shipTONO = this.shiptono;

    console.log(this.device)
  }
  ngOnInit() {

  }

}

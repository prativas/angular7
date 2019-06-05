import { Component, ElementRef } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //device: any = [];
  model: any = {};
  title = 'Add Device';
  device: any = [];
  private editable: boolean = true;
  editableRow = -1;
  delRow;
  oldValue;
  constructor() { }

  addDevice(value: any) {
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    this.device.push(value);
  }
  editRow(dev) {
    this.editableRow = dev;
    this.editable = false;
    this.oldValue = {
      customername: this.device[this.editableRow].customername,
      devicenumber: this.device[this.editableRow].devicenumber,
      macid: this.device[this.editableRow].macid,
      shiptono: this.device[this.editableRow].shiptono
    };
  }
  save(value: any) {
    this.editableRow = value;
    this.editable = false;
  }
  cancel(value) {
    //console.log(this.editableRow);
    console.log(this.oldValue);
    this.device[this.editableRow].customername = this.oldValue.customername;
    this.device[this.editableRow].devicenumber = this.oldValue.devicenumber;
    this.device[this.editableRow].macid = this.oldValue.macid;
    this.device[this.editableRow].shiptono = this.oldValue.shiptono;

    this.editableRow = -1;

    this.editable = false;
  }
  deleteRow(row) {
    this.delRow = this.device.indexOf(row);
    this.device.splice(this.delRow, 1);
  }
  ngOnInit() { }
}

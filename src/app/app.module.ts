// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { AddDeviceComponent } from './components/add-device/add-device.component';

// import { ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AddDeviceComponent,
//   ],
//   imports: [
//     BrowserModule,
//     // other imports ...
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

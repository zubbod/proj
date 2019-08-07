import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BoldDirective } from './shared/directives/bold.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OwnCustomMaterialModule } from './shared/material.module';
import { SelectButtonComponent } from './my/components/select-button/select-button.component';
import { ApiService } from './api/api.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MenuComponent,
    AboutComponent,
    InfoComponent,
    SelectButtonComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OwnCustomMaterialModule,
    NgbModule,
    // remove this, when real api will be ready
    HttpClientInMemoryWebApiModule.forRoot(
      ApiService, {dataEncapsulation: false, passThruUnknownUrl: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

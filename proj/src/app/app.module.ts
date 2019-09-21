import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BoldDirective } from './shared/directives/bold.directive';
import { FormatNumberDirective } from './shared/directives/format-number.directive';
import { HoverDirectiveDirective } from './shared/directives/hover-directive.directive';

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
import { UserFormComponent } from './user-form/user-form.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostViewComponent } from './posts/post-view/post-view.component';
import { PostsComponent } from './posts/posts.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfNotDirective } from './directives/if-not.directive';
import { HoverDirective } from './directives/hover.directive';
import { UpperPipe } from './shared/pipes/upper.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MenuComponent,
    AboutComponent,
    InfoComponent,
    SelectButtonComponent,
    BoldDirective,
    FormatNumberDirective,
    UserFormComponent,
    PostCreateComponent,
    PostViewComponent,
    PostsComponent,
    HoverDirectiveDirective,
    DirectivesComponent,
    IfNotDirective,
    HoverDirective,
    UpperPipe
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
    FormsModule,
    // remove this, when real api will be ready
    HttpClientInMemoryWebApiModule.forRoot(
      ApiService, {dataEncapsulation: false, passThruUnknownUrl: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

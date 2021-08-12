import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { EmployeesModule } from './employees/employees.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // ngModel, template driven forms
    HttpClientModule,
    EmployeesModule, // Feature Module
    AppRoutingModule
  ],
  providers: [],
  // AppModule should inturn be bootstrapped with a comp -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }

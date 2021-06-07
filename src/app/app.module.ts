import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenAppHeaderComponent } from './open-app-header/open-app-header.component';
import { CardComponentComponent } from './card-component/card-component.component';

@NgModule({
  declarations: [AppComponent, OpenAppHeaderComponent, CardComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

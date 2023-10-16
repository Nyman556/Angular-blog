import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from './icons/icons.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogListComponent } from './views/blog-list/blog-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent, BlogListComponent],
  imports: [BrowserModule, AppRoutingModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

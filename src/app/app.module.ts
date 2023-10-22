import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from './icons/icons.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogListComponent } from './views/blog-list/blog-list.component';
import { BlogDetailsComponent } from './views/blog-details/blog-details.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogListComponent,
    BlogDetailsComponent,
    AboutMeComponent,
    CreatePostComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IconsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

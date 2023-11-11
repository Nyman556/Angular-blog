import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from './icons/icons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogListComponent } from './views/blog-list/blog-list.component';
import { BlogDetailsComponent } from './views/blog-details/blog-details.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadingComponent } from './components/heading/heading.component';
import { BlogListPostComponent } from './components/blog-list-post/blog-list-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogListComponent,
    BlogDetailsComponent,
    AboutMeComponent,
    CreatePostComponent,
    FooterComponent,
    CreatePostFormComponent,
    HeadingComponent,
    BlogListPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

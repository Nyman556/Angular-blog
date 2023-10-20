import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './views/blog-list/blog-list.component';
import { BlogDetailsComponent } from './views/blog-details/blog-details.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { CreatePostComponent } from './views/create-post/create-post.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  {
    path: 'Blog/:id',
    component: BlogDetailsComponent,
  },
  {
    path: 'About',
    component: AboutMeComponent,
  },
  {
    path: 'Create',
    component: CreatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

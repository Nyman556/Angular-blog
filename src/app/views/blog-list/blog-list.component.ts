import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {
  constructor(private PostService: PostService) {}
  get posts(): Post[] {
    return this.PostService.post;
  }
}

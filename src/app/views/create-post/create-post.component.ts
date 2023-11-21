import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
})
export class CreatePostComponent {
  get posts(): Post[] {
    return this.PostService.post;
  }
  constructor(private PostService: PostService) {}
}

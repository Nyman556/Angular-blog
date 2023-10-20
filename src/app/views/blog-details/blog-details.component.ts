import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  PostService = inject(PostService);
  post: Post | undefined;
  constructor() {
    const postId = Number(this.route.snapshot.params['id']);
    console.log(postId);
    this.post = this.PostService.getPostById(postId);
  }
}

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
  post: Post | undefined;
  constructor(private PostService: PostService) {
    const postId = Number(this.route.snapshot.params['id']);
    console.log(postId);
    this.post = this.PostService.getPostById(postId);
  }
  likeClick() {
    if (this.post !== undefined) this.PostService.like(this.post);
  }
  dislikeClick() {
    if (this.post !== undefined) this.PostService.dislike(this.post);
  }
}

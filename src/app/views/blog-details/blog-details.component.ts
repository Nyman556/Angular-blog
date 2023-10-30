import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  post: Post | undefined;
  comment: string = '';
  _postId: number;
  constructor(
    private PostService: PostService,
    private storageService: StorageService
  ) {
    this._postId = Number(this.route.snapshot.params['id']);
    this.post = this.PostService.getPostById(this._postId);
  }
  likeClick() {
    if (this.post !== undefined) this.PostService.like(this.post);
  }
  dislikeClick() {
    if (this.post !== undefined) this.PostService.dislike(this.post);
  }
  createComment() {
    if (this.comment) {
      this.PostService.addComment(this.comment, this._postId);
      this.comment = '';
      this.PostService.savePosts();
    }
  }
}

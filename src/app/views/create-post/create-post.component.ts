import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  date: Date = new Date();
  NewPost: Post;
  get posts(): Post[] {
    return this.PostService.post;
  }
  constructor(private PostService: PostService) {
    this.NewPost = {
      id: this.posts.length + 1,
      title: '',
      thumbnailUrl: '',
      body: '',
      creationDate: this.date,
      likes: 0,
      dislikes: 0,
      comments: [],
      tags: [],
    };
  }
  SubmitPost() {
    if (
      this.NewPost.title &&
      this.NewPost.thumbnailUrl &&
      this.NewPost.body !== ''
    ) {
      this.PostService.addPost(this.NewPost);
      this.PostService.savePosts();
    }
  }
  clear() {
    this.NewPost.title = '';
    this.NewPost.thumbnailUrl = '';
    this.NewPost.body = '';
  }
}

import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { ToastService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css'],
})
export class CreatePostFormComponent {
  @Input() posts: Post[] = [];
  date: Date = new Date();
  NewPost: Post | undefined;
  PostForm = new FormGroup({
    PostTitle: new FormControl(''),
    ImageUrl: new FormControl(''),
    PostBody: new FormControl(''),
    PostTag: new FormControl(''),
  });
  constructor(
    private PostService: PostService,
    private ToastService: ToastService
  ) {}
  clear() {
    this.PostForm.reset();
    this.ToastService.success('Fields Cleared!');
  }
  onSubmit() {
    this.NewPost = {
      id: this.posts.length + 1,
      title: this.PostForm.value.PostTitle ?? '',
      thumbnailUrl: this.PostForm.value.ImageUrl ?? '',
      body: this.PostForm.value.PostBody ?? '',
      creationDate: this.date,
      likes: 0,
      dislikes: 0,
      comments: [],
      tag: this.PostForm.value.PostTag ?? '',
    };
    this.PostService.addPost(this.NewPost);
    this.PostService.savePosts();
    this.PostForm.reset();
    this.ToastService.success('Post Published!');
  }
}

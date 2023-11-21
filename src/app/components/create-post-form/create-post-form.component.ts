import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { ToastService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
})
export class CreatePostFormComponent {
  @Input() posts: Post[] = [];
  private date: Date = new Date();
  private NewPost: Post | undefined;
  public PostForm = new FormGroup({
    PostTitle: new FormControl(''),
    ImageUrl: new FormControl(''),
    PostBody: new FormControl(''),
    PostTag: new FormControl(''),
  });
  constructor(
    private PostService: PostService,
    private ToastService: ToastService
  ) {}
  public clear() {
    this.PostForm.reset();
    this.ToastService.success('Fields Cleared!');
  }
  public onSubmit() {
    this.NewPost = new Post(
      this.posts.length + 1,
      this.PostForm.value.PostTitle ?? '',
      this.PostForm.value.ImageUrl ?? '',
      this.PostForm.value.PostBody ?? '',
      this.date,
      0,
      0,
      [],
      this.PostForm.value.PostTag ?? ''
    );
    this.PostService.addPost(this.NewPost);
    this.PostService.savePosts();
    this.PostForm.reset();
    this.ToastService.success('Post Published!');
  }
}

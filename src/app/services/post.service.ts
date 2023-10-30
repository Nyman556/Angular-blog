import { Injectable, OnChanges } from '@angular/core';
import { Post } from '../models/post';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public _posts: Post[];

  constructor(private StorageService: StorageService) {
    this._posts = StorageService.loadPosts();
  }
  public get post(): Post[] {
    return this._posts;
  }
  public addPost(post: Post): void {
    this._posts.push(post);
  }
  public addComment(comment: string, id: number) {
    this._posts[id - 1].comments.push(comment);
  }
  public savePosts() {
    this.StorageService.savePostsToStorage(this._posts);
  }
  public like(post: Post) {
    post.likes++;
    this.savePosts();
  }
  public dislike(post: Post) {
    post.dislikes++;
    this.savePosts();
  }
  getPostById(id: number): Post | undefined {
    return this.post.find((post) => post.id === id);
  }
}

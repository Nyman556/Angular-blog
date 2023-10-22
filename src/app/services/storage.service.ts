import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public savePosts(posts: Post[]): void {
    localStorage.setItem('savedPosts', JSON.stringify(posts));
  }
  public loadPosts() {
    let postJson = localStorage.getItem('savedPosts');
    return postJson;
  }
}

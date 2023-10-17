import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  date: Date = new Date();
  private _posts: Post[] = [
    {
      title: 'string',
      thumbnailUrl: 'https://source.unsplash.com/random',
      body: 'string',
      creationDate: this.date,
      likes: 0,
      dislikes: 0,
      comments: ['hello'],
    },
    {
      title: 'string',
      thumbnailUrl: 'https://source.unsplash.com/random',
      body: 'string',
      creationDate: this.date,
      likes: 0,
      dislikes: 0,
      comments: ['hello'],
    },
    {
      title: 'string',
      thumbnailUrl: 'https://source.unsplash.com/random',
      body: 'string',
      creationDate: this.date,
      likes: 0,
      dislikes: 0,
      comments: ['hello'],
    },
    {
      title: 'string',
      thumbnailUrl: 'https://source.unsplash.com/random',
      body: 'string',
      creationDate: this.date,
      likes: 0,
      dislikes: 0,
      comments: ['hello'],
    },
    {
      title: 'string',
      thumbnailUrl: 'https://source.unsplash.com/random',
      body: 'string',
      creationDate: this.date,
      likes: 0,
      dislikes: 0,
      comments: ['hello'],
    },
    {
      title: 'string',
      thumbnailUrl: 'https://source.unsplash.com/random',
      body: 'string',
      creationDate: this.date,
      likes: 0,
      dislikes: 0,
      comments: ['hello'],
    },
  ];

  constructor() {}
  public get post(): Post[] {
    return this._posts;
  }
  public addPost(post: Post): void {
    this._posts.push(post);
  }
}

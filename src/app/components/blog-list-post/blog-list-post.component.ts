import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-blog-list-post',
  templateUrl: './blog-list-post.component.html',
})
export class BlogListPostComponent {
  @Input() post: Post | undefined = undefined;
}

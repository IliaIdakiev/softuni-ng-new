import { Component, Input } from '@angular/core';
import { IPost } from '../../shared/interfaces';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  @Input() themeId: string;

  @Input() postList: IPost[];

}

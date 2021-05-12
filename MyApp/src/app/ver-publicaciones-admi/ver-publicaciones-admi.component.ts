import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { InfoPublicacionesServiceService } from '../service/info-publicaciones-service.service';


@Component({
  selector: 'app-ver-publicaciones-admi',
  templateUrl: './ver-publicaciones-admi.component.html',
  styleUrls: ['./ver-publicaciones-admi.component.css']
})
export class VerPublicacionesAdmiComponent implements OnInit {

  posts: Array<Post>;

  constructor(private InfoPublicacionesServiceService: InfoPublicacionesServiceService) {
    this.posts = new Array<Post>();
   }

  

  ngOnInit(): void {
    this.InfoPublicacionesServiceService.getAllPosts().subscribe((post)=>{
      this.posts = post;
      console.log(this.posts);
    })
  }

}

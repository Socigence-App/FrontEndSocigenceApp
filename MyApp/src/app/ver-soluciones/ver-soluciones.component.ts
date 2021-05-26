import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { InfoPublicacionesServiceService } from '../service/info-publicaciones-service.service';

@Component({
  selector: 'app-ver-soluciones',
  templateUrl: './ver-soluciones.component.html',
  styleUrls: ['./ver-soluciones.component.css']
})
export class VerSolucionesComponent implements OnInit {

  posts: Array<Post>;

  constructor(private InfoPublicacionesServiceService: InfoPublicacionesServiceService) {
    this.posts = new Array<Post>();
   }

  

  ngOnInit(): void {
    this.InfoPublicacionesServiceService.getPostsAnalisis().subscribe((post)=>{
      this.posts = post;
      console.log(this.posts);
    })
  }


}

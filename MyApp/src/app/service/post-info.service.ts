import { HttpClient } from "@angular/common/http";
import { environment } from "../environment/env";
import { Post } from "../models/post.model";

export class PostInfoService{

    postsService: Array<Post>

    constructor(private http: HttpClient){
        this.postsService= new Array <Post> ();
    }

    crearPost(newPost: Post){
        this.http.post(`${environment.apiUrl}post`, newPost).subscribe(post => console.log(post))
    }

    
}
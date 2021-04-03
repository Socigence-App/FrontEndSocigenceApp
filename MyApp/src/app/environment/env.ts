import { Post } from "../models/post.model";
import { Usuario } from "../models/user.model";

export const environment ={
    apiUrl: 'http://localhost:3000',
    User: new Usuario,
    Users: Array <Usuario>(),
    Post: new Post,
    Posts: Array <Post>()
}
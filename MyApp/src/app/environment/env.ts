import { Categoria } from "../models/categoria.model";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";

export const environment ={
    apiUrl: 'http://localhost:3000/',
    User: new User,
    Users: Array <User>(),
    Post: new Post,
    Posts: Array <Post>(),
    Categorias: Array <Categoria>()
}
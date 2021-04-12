import { Categoria } from "./categoria.model";
import { User } from "./user.model";

export class Post{
    _id!: string;
    titulo!: string;
    descripcion!: string;
    puntuacion!: number;
    user!: User;
    categoria!: Categoria;

}
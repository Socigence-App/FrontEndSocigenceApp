import { Categoria } from "./categoria.model";
import { User } from "./user.model";

export class Reto{
    _id!: string;
    titulo!: string;
    descripcion!: string;
    user!: User;
    categoria!: Categoria;
}
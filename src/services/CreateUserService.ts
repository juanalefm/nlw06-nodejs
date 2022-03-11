import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}


class CreateUserService {
    async execute({name, email, admin}: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        //Verifica se mandou o email na requisição
        if(!email){
            throw new Error("Email incorrect")
        }

        //busca no banco de dados pelo email
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        //Verifica se já existe o email da requisição
        if(userAlreadyExists) {
            throw new Error("User already exists");
        }

        //cria uma instacia do user com os dados
        const user = usersRepository.create({
            name,
            email,
            admin
        });
        
        //salva no BD o usuario
        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }
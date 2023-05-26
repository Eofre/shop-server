import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { createUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    findOne(filter:{
        where: {id?: string, username?: string, email?: string, numberPhone?: string}
    }): Promise<User> {
      return this.userModel.findOne({...filter})
    }

    async create(createUserDto: createUserDto): Promise<User | { warningMessage: string}> {
        const user = new User();

        const existingByUsername = await this.findOne({
            where: {username: createUserDto.username}
        })
        const existingByEmail = await this.findOne({
            where: {email: createUserDto.email}
        })
        const existingByNumberPhone = await this.findOne({
            where: {numberPhone: createUserDto.numberPhone}
        })

        if(existingByUsername) {
            return { warningMessage: "Пользователь с таким логином уже существует."}
        }
        if(existingByEmail) {
            return { warningMessage: "Пользователь с таким email уже существует."}
        }
        if(existingByNumberPhone) {
            return { warningMessage: "Пользователь с таким номер телефона уже существует."}
        }

        const handlerPassword = await bcrypt.hash(createUserDto.password, 10);

        user.username = createUserDto.username,
        user.password = handlerPassword;
        user.email = createUserDto.email;
        user.fullName = createUserDto.fullName;
        user.numberPhone = createUserDto.numberPhone;

        return user.save();
    }
}

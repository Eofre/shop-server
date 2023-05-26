import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async validateUser(username: string, password: string) {
        const user = await this.userService.findOne({
            where: {username}
        })

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const passwordValid = await bcrypt.compare(password, user.password);

        if (!passwordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        if(user && passwordValid) {
            return {
                userId: user.id,
                username: user.username,
                email: user.email,
                numberPhone: user.numberPhone,
                fullName: user.fullName,
                address: user.address
            }
        }

        return null;
    }
}

import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export async function signUp(name, email, password){
    const {rows: existingUsers} = await urlsRepository.getUserByEmail(email);

        if (existingUsers.rowCount > 0) {
            throw{type:409}
        }

        const hashedPassword = bcrypt.hashSync(password, 12);

        await urlsRepository.createUser(name, email, hashedPassword)
}

export async function signIn(email, password){
    const { rows: user } = await urlsRepository.getUserByEmail(email)

        if (!user || !bcrypt.compareSync(password, user.password)) {
            throw{type:401}
        }

        const token = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_SECRET
        );
        return token;
}
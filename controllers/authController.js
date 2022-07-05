import * as authService from '../services/authServices.js';
import { urlsRepository } from '../repositories/authRepository.js';
import dotenv from "dotenv"
dotenv.config()

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.sendStatus(422);
    }

    const user = await authService.signUp({
        name,
        email,
        password
    });

    if (user === null) {
        return res.sendStatus(422);
    }

    res.sendStatus(201);
};

export async function signIn(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.sendStatus(422);
    }

    const token = await authService.signIn(email, password)

    res.send({
        token,
    });
};
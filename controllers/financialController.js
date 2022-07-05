import { financialRepository } from "../repositories/financialRepository";
import * as financialServices from '../services/financialServices.js';

export async function postFinancialEvents (req, res) {
        user = res.locals;
        const { value, type } = req.body;

        await financialServices.checkFinancialEvents(value, type, user)

        res.sendStatus(201);
};

export async function getFinancialEvents (req, res) {
        user = res.locals;
        const events = await financialServices.getFinancialEvents(user)

        res.send(events);
};

export async function getSumFinancialEvents (req, res) {
        user = res.locals;

        await financialServices.getFinancialEventSum(user)

        res.send({ sum });
};
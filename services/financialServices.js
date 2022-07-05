import { financialRepository } from "../repositories/financialRepository";

export async function checkFinancialEvents(value, type, user){
    if (!value || !type) {
        throw{type:422};
    }

    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) {
        throw{type:422};
    }

    if (value < 0) {
        throw{type:422};
    }

    await financialRepository.createFinancialEvent(user.id, value, type);
}

export async function getFinancialEventSum(user){
    const {rows:events} = await financialRepository.getFinancialEventByUserId(user.id)
    if(!events) throw{type:404}
    const sum = events.reduce(
        (total, event) =>
            event.type === "INCOME" ? total + event.value : total - event.value,
        0
    );
}

export async function getFinancialEvents(user){
    const {rows:events} = await financialRepository.getFinancialEventByUserId(user.id);
    if(!events) throw{type:404}
    return events;
}
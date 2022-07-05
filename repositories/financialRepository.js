import connection from "../db.js";

async function getFinancialEventByUserId(id) {
    return connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [id]
    );
}

async function createFinancialEvent(id, value, type){
    return connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [id, value, type]
    );
}

export const financialRepository = {
    getFinancialEventByUserId,
    createFinancialEvent
}
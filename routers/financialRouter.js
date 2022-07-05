import { Router } from 'express';
import { getFinancialEvents, postFinancialEvents, getSumFinancialEvents } from '../controllers/financialController.js';
import validateToken from "../middlewares/tokenMiddleware.js";

const financialRouter = Router();
financialRouter.post("/financial-events",validateToken, postFinancialEvents);
financialRouter.get("/financial-events",validateToken ,getFinancialEvents);
financialRouter.get("/financial-events/sum",validateToken ,getSumFinancialEvents);
export default financialRouter;
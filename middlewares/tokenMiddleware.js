import jwt from "jsonwebtoken";

const validateToken = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization || "";
        const token = authorization.replace("Bearer ", "");

        if (!token) {
            return res.sendStatus(401);
        }

        res.locals.user = user;
        user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        return res.sendStatus(401);
    }
}

export default validateToken;
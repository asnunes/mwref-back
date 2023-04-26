import { statementsSchema } from "../../models/statementsSchema.js";
import { validateBySchema } from "../../middlewares/validateBySchema.js";
import { updateStatement } from "../../models/updateStatement.js";
import dayjs from "dayjs";

export async function postAccounts(req, res) {
    const { account } = res.locals;
    const { operation, value, description } = req.body;
    const { statement } = account;
    const id = account._id;
    let now = dayjs();
    if (!validateBySchema(req.body, res, statementsSchema)) return;

    statement.forEach((s, idx) => (s.id = idx));

    if (operation === "debits")
        statement.push({
            type: "debits",
            value: value,
            description: description,
            date: now.format("DD/MM/YYYY HH:mm:ss"),
            id: statement.length,
        });
    else
        statement.push({
            type: "credits",
            value: value,
            description: description,
            date: now.format("DD/MM/YYYY HH:mm:ss"),
            id: statement.length,
        });

    updateStatement(statement, id, res);
}

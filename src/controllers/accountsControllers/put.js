import { validateBySchema } from "../../middlewares/validateBySchema.js";
import { statementsSchema } from "../../models/statementsSchema.js";
import { updateStatement } from "../../models/updateStatement.js";

export async function putAccounts(req, res) {
    const {account} = res.locals;
    const id = Number(req.params.id);
    const { statement } = account;
    const { value, description } = req.body
    const idAccount = account._id;

    if (!validateBySchema(req.body, res, statementsSchema)) return;
    
    statement.forEach((s) => {
        if(s.id===id) {
          s.value=value;
          s.description=description;
        }
    });


    updateStatement(statement, idAccount, res);
}

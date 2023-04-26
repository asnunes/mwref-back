import { updateStatement } from "../../models/updateStatement.js";

export async function deleteAccounts(req, res) {
    const account = res.locals.account;
    const id = Number(req.params.id);
    const { statement } = account;
    const idAccount = account._id;

    const statementDelete = statement.filter((s) => s.id !== id);

    statementDelete.forEach((s, idx) => (s.id = idx));

    updateStatement(statementDelete, idAccount, res);
}

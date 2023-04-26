import { accounts } from "../database/mongoDB.js";

export async function updateStatement(stat, id, res) {
    try {
        await accounts.updateOne(
            { _id: id },
            {
                $set: {
                    statement: stat,
                },
            }
        );
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

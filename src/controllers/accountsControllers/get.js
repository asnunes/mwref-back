export async function getAccounts(req, res) {
    const account = res.locals.account;
    res.send(account);
}
